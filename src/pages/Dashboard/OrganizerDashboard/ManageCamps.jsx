import React, { useState } from 'react'
import Heading from '../../../components/Shared/Heading'
import ManageCampsTable from '../../../components/dashboard/OrganizerDashboard/AddACamp/ManageCampsTable'

import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import UpdateCampFrom from '../../../components/model/UpdateCampFrom';
import { useImageUpload } from '../../../hooks/useImageUpload';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';


function ManageCamps() {
const axiosCommon = useAxiosCommon()
const [isOpen,setIsOpen] = useState(false)
const [updatecamp,setUpdatecamp] = useState([])
const [loading,setLoading] = useState(false)
const axiosSecure = useAxiosSecure()
const {data: camps =[],isLoading,refetch} = useQuery({
  queryKey: ['allcampData'],
  queryFn:async()=>{
    const { data } = await axiosCommon.get(`/allcampData`);
    return data
  }
})

//update camp
const onSubmit =async(data) =>{
setLoading(true)
console.log(data.files.length)
const CampName = data.CampName
 const DateTime = data.DateTime;
 const Location = data.Location;
 const HealthcareProfessional= data.HealthcareProfessional;
 const ParticipantCount = parseInt(data.ParticipantCount);
 const CampFees = parseFloat(data.CampFees)
 const Description = data.Description;
 let Image = ''
 //condition image set
 if(data.files.length < 1){
 Image = updatecamp.Image
 }else{
 try {
  Image = await useImageUpload(data.files[0])
 } catch (error) {
  
 }
 }

 try {
  //update data
  const allAddData ={
    Image,
    CampName,
    DateTime,
    Location,
    HealthcareProfessional,
    ParticipantCount,
    CampFees,
    Description
  }

///update camp fatch
const {data} = axiosSecure.put(`/updateCamp/${updatecamp._id}`,allAddData)
 toast.success("Camp Update successful")
 } catch (error) {
  toast.error(error.message)
 }finally{
  setLoading(false)
  closeModal(false)
 }
}
  const handleEdit = (camp) => {
    // Implement edit functionality
    setUpdatecamp(camp)
     setIsOpen(true)
  };
  const closeModal =()=>{
    setIsOpen(false)
  }

  //delete camp
  const handleDelete = async(id) => {
    // Implement delete functionality
    try {
      //delete featch
      const {data} =await axiosSecure.delete(`/campDelete/${id}`)
      toast.success("Delete successful")
      refetch()
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <>
    <div className='my-6'>
    <Heading title="Manage Camps" subtitle="Manage every camps update and delete" center="center"></Heading>
    </div>

    {/* // manageCampsTable */}
    <ManageCampsTable camps={camps} handleDelete={handleDelete} handleEdit={handleEdit}></ManageCampsTable>


    {/* update modal from */}
    <UpdateCampFrom isOpen={isOpen} closeModal={closeModal}
        onSubmit={onSubmit}
        campDetails={updatecamp} loading={loading}></UpdateCampFrom>
    </>

    
  )
}

export default ManageCamps
