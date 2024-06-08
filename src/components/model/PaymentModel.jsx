
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { TbFidgetSpinner } from "react-icons/tb";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import PaymentFrom from '../From/PaymentFrom';


const PaymentModel = ({ paymentCamp,user,isOpen,closeModal,onSubmit,loading }) => {
  const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
  
  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <>
     

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 transition-opacity bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   {
                    paymentCamp.CampName
                   } (Payment)
                  </Dialog.Title>
                  <div className="mt-2">
                 {/* stripe elements */}
                   <Elements stripe={stripePromise}>
                    {/* Form */}
                    <PaymentFrom />
                   </Elements>
                   {/* button */}
            <div className="mt-4 justify-center flex gap-12">
                        <button
                         disabled={loading}
                          type="submit"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                            {
              loading ? <TbFidgetSpinner className="animate-spin text-center mx-auto"/> : "Submit"
             }
                          
                        </button>
                        <p onClick={closeModal}
                         
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium cursor-pointer text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                        >
                          cancel
                        </p>
                      </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};




export default PaymentModel

