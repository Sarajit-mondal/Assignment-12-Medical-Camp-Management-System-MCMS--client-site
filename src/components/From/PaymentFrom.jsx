// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#we
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import './common.css'
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import {ImSpinner9} from 'react-icons/im'
import toast from 'react-hot-toast'

const PaymentFrom = ({closeModal,campInfo,refetch}) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const [clientSecret, setClientSecret] = useState("");
  const [cardError,setCardError] = useState()
  const [processing,setProcessing] = useState(false)
  
  useEffect(()=>{
   if(campInfo.CampFees && campInfo.CampFees >= 1){
    getClientSecret({price : campInfo.CampFees})
   }
  },[campInfo.CampFees])
  
  // get clientSecret
  const getClientSecret = async(price) =>{
  const {data} =await axiosSecure.post('/create-payment-stripe',price)
  //(data)
  setClientSecret(data.clientSecret)
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true)
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error)
      setProcessing(false)
      //('[error]', error);
      return
    } else {
      //('[PaymentMethod]', paymentMethod);
      setCardError('')
    }
    //confirm payment
  const  {error: confirmError,paymentIntent}=  await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card:card,
        billing_details: {
          email: user?.email,
          name: user?.displayName,
        }
      }
    })
    if(confirmError){
      //(confirmError)
      setCardError(confirmError)
      setProcessing(false)
      return
    }

    if(paymentIntent.status === 'succeeded'){
      //(paymentIntent)
      //1. Create payment info object
      const paymentInfo = {
        ...campInfo,
        paymentCampId: campInfo._id,
        paymentStatus: "Paid",
        transactionId: paymentIntent.id,
        data:new Date()
      }
      delete paymentInfo._id
      delete paymentInfo.PaymentStatus
      //(paymentInfo)
     
      try {
        //2. save payment info in booking collection (db)
         const {data} =await axiosSecure.post('/booking',paymentInfo)
       //update unpadi to paid
       toast.success("Payment successfull")
       closeModal()
       refetch()
      } catch (error) {
        setCardError(error)
      }

    }

    setProcessing(false)
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    
       {/* button */}
       <div className="mt-4 justify-center flex gap-12">
                        <button
                         disabled={!stripe || processing || !clientSecret }
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                          {
                            processing ? <ImSpinner9 className='animate-spin m-auto' /> :` Pay $ ${campInfo.CampFees}`
                          }
                        </button>
                        <p onClick={closeModal}
                         
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium cursor-pointer text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                        >
                          cancel
                        </p>
            </div>
    </form>
    {
      cardError && <p className='text-red-500 ml-8'>{cardError.message || cardError.code}</p>
    }
    </>
  );
};


export default PaymentFrom
