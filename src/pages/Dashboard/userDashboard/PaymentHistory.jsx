import React from 'react'
import PaymentTable from '../../../components/dashboard/UserDashboard/PaymentTable';
import Heading from '../../../components/Shared/Heading';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async'
function PaymentHistory() {
const axiosSecure = useAxiosSecure()
const {user,loading} = useAuth()
const {data: paymentHistores =[]} = useQuery({
  queryKey : ['paymentHistory'],
  enabled : !loading && !!user?.email,
  queryFn : async () =>{
  const {data} =await axiosSecure.get(`/allMyPayments/${user?.email}`)
  return data
  }
})
console.log("my Payment history",paymentHistores)
const participant = {
        name: 'John Doe',
        fees: '$200',
        paymentStatus: 'Paid',
        confirmationStatus: 'Confirmed'
      };
  return (
    <div className='space-y-4'>
      <Helmet title='Payment History'></Helmet>
     <Heading  title="Payment History" subtitle="This is your all payment History" center="center"></Heading>
      {/* payment history */}
      <PaymentTable paymentHistores={paymentHistores}></PaymentTable>
    </div>
  )
}

export default PaymentHistory
