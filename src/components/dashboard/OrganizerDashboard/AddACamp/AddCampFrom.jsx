import React from "react";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";

const AddCampForm = ({onSubmit,loading}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-md">
     

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Camp Name
              </label>
              <input
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
                {...register("files", { required: true })}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {errors.image && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Camp Fees
              </label>
              <input
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
              <input
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
              <input
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
                Healthcare Professional Name
              </label>
              <input
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
              <input
                type="number"
                value={0}
                {...register("ParticipantCount")}
             
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
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

          <div className="mt-4">
            <button
              type="submit"
              disabled ={loading}
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 active:scale-95 ease-linear duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
               {
              loading ? <TbFidgetSpinner className="animate-spin text-center mx-auto"/> : " Add Camp"
             }
             
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampForm;