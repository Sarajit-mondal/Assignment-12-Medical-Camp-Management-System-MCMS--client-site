import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLoaderData, useLocation, useNavigate} from 'react-router-dom';
import ParticipantForm from '../model/ParticipantForm';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import useAxiosCommon from '../../hooks/useAxiosCommon';
import toast from "react-hot-toast";

const CampDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CampDetail = useLoaderData()
  const {user} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const axiosCommon = useAxiosCommon()
  const [loading,setLoading] = useState(false)
  const {
    _id, 
    CampName, 
    Image, 
    CampFees, 
    DateTime, 
    Location, 
    HealthcareProfessional, 
    ParticipantCount, 
    Description,} = CampDetail || {}


//handleSubmit
const onSubmit =async(data) =>{
setLoading(true)
const participantData ={
  campId:_id, 
  CampName, 
  ParticipantName:user?.displayName,
  ParticipantEmail:user?.email,
  Image, 
  CampFees, 
  DateTime, 
  Location, 
  HealthcareProfessional, 
  ...data
}
//post registered data
try {
 const {data} =await axiosCommon.post('/registerCamp',participantData)
 console.log("Thiss data",data)
 if(data.acknowledged){
  toast.success("Regiter sucessfull")
 }else{
  toast.success("AllReady registed")
 }
} catch (error) {
  
}finally{
  closeModal()
  setLoading(false)
}

}   

//close model
const closeModal = () => {
  setIsOpen(false);
};
//handle Join
const handleJoin =()=>{
if(user){
  setIsOpen(true)
}else{
  Swal.fire({
    title: "Please Login Frist After Join Camp",
    showDenyButton: true,
    confirmButtonText: "yes",
    confirmButtonColor:"blue"
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      navigate('/login',{state:location.pathname})
    
    } 
  });
}
}
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
          onClick={handleJoin} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Join Camp
        </button>
        <ParticipantForm isOpen={isOpen} closeModal={closeModal}
        onSubmit={onSubmit}
        campDetails={CampDetail}
         user={user} loading={loading}></ParticipantForm>
      </div>
    </div>
    </>
  );
};

export default CampDetails;
