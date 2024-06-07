
import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { TbFidgetSpinner } from "react-icons/tb";

const UpdateCampFrom = ({ campDetails,isOpen,closeModal,onSubmit,loading }) => {
  
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
                    Update Camp
                  </Dialog.Title>
                  <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Camp Name
              </label>
              <input defaultValue={campDetails.CampName} 
                type="text"
                {...register("CampName", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.campName && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image
              </label>
              <input
                type="file"
                {...register("files")}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.files && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Camp Fees
              </label>
              <input defaultValue={campDetails.CampFees}
                type="number"
                {...register("CampFees", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.campFees && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date & Time
              </label>
              <input defaultValue={campDetails.DateTime}
                type="datetime-local"
                {...register("DateTime", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.dateTime && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input defaultValue={campDetails.Location}
                type="text"
                {...register("Location", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.location && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Healthcare Name
              </label>
              <input 
              defaultValue={campDetails.HealthcareProfessional
              }
                type="text"
                {...register("HealthcareProfessional", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.healthcareProfessionalName && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Participant Count
              </label>
              <input defaultValue={campDetails.ParticipantCount}
                type="number"
                {...register("ParticipantCount")}
             
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
               defaultValue={campDetails.Description}
                {...register("Description", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
              {errors.description && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

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




export default UpdateCampFrom
