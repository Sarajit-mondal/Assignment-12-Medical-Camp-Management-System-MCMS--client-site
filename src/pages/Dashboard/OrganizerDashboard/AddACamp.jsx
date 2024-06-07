import React, { useState } from 'react'
import Heading from '../../../components/Shared/Heading'
import AddCampForm from '../../../components/dashboard/OrganizerDashboard/AddACamp/AddCampFrom'
import { useImageUpload } from '../../../hooks/useImageUpload';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';



function AddACamp() {
  const [loading,setLoading] = useState(false)
  const axiosSecure = useAxiosSecure()
  //add data
  const onSubmit = async(data) => {
  setLoading(true)
 const CampName = data.CampName
 const DateTime = data.DateTime;
 const Location = data.Location;
 const HealthcareProfessional= data.HealthcareProfessional;
 const ParticipantCount = parseInt(data.ParticipantCount);
 const CampFees = parseFloat(data.CampFees)
 const Description = data.Description;
 const Image = await useImageUpload(data.files[0])
try {
  //create image link
 
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

  //add new camp on database
  const {data} =await axiosSecure.post('/addCamp',allAddData)

  toast.success("new Camp Added")
} catch (error) {
  toast.error(error.message)
  console.log(error)
}finally{
  setLoading(false)
}


  };
  return (
    <div>
      <Heading title="Add A Camp" subtitle="Add new Medical Camp" center="center"></Heading>

      {/* // add Camp From  */}
      <AddCampForm onSubmit={onSubmit}loading={loading}></AddCampForm>
    </div>
  )
}

export default AddACamp
