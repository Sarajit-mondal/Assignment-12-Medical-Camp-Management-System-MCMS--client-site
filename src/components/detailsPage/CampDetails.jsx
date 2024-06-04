import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ParticipantForm from '../model/ParticipantForm';

const CampDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CampDetail = useLoaderData()
  console.log(CampDetail)
  const { CampName, 
    Image, 
    CampFees, 
    DateTime, 
    Location, 
    HealthcareProfessional, 
    ParticipantCount, 
    Description, 
    onJoin } = CampDetail || {}


//handleSubmit
const onSubmit =(data) =>{
console.log(data)
}   

//close model
const closeModal = () => {
  setIsOpen(false);
};

  return (
    <>
    <Helmet title={CampName +' Details'}></Helmet>
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <img className="w-full h-72 object-cover" src={Image} alt={CampName} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">{CampName}</h2>
        <p className="text-gray-700 mb-2"><span className="font-bold">Camp Fees:</span> ${CampFees}</p>
        <p className="text-gray-700 mb-2"><span className="font-bold">Date & Time:</span> {DateTime}</p>
        <p className="text-gray-700 mb-2"><span className="font-bold">Location:</span> {Location}</p>
        <p className="text-gray-700 mb-2"><span className="font-bold">Health Care Professional:</span> {HealthcareProfessional}</p>
        <p className="text-gray-700 mb-2"><span className="font-bold">Participants:</span> {ParticipantCount}</p>
        <p className="text-gray-700 mb-4"><span className="font-bold">Description:</span> {Description}</p>
        <button 
          onClick={()=> setIsOpen(true)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Camp
        </button>
        <ParticipantForm isOpen={isOpen} closeModal={closeModal}
        onSubmit={onSubmit}
        campDetails={CampDetail}
        ></ParticipantForm>
      </div>
    </div>
    </>
  );
};

export default CampDetails;
