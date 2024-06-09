
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { TbFidgetSpinner } from "react-icons/tb";

const UserFeedback = ({ isOpen,closeModal,onSubmit,loading}) => {
  
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
                  <p className='text-2xl text-center'>Give your FeedBack</p>
                  </Dialog.Title>
                  <div className="mt-2">
                   {/* Form */}
                   <form onSubmit={handleSubmit(onSubmit)} >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Ratting 
              </label>
              <input  
                type="number"
                min={1}
                max={5}
                {...register("ratting", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.ratting && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Give your message
              </label>
              <textarea  
                type="text"
               
                {...register("feedback", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.ratting && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
           
            </div>
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
                   </form>
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



export default UserFeedback
