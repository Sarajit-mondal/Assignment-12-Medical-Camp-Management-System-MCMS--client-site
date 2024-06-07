import React, { useState } from 'react'
import Heading from '../../../components/Shared/Heading'
import ManageCampsTable from '../../../components/dashboard/OrganizerDashboard/AddACamp/ManageCampsTable'

import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import UpdateCampFrom from '../../../components/model/UpdateCampFrom';


function ManageCamps() {
const axiosCommon = useAxiosCommon()
const [isOpen,setIsOpen] = useState(false)
const [updatecamp,setUpdatecamp] = useState([])
const {data: camps =[],isLoading,refatch} = useQuery({
  queryKey: ['allcampData'],
  queryFn:async()=>{
    const { data } = await axiosCommon.get(`/allcampData`);
    return data
  }
})

const onSubmit =(data) =>{
console.log(data)
}
  const handleEdit = (camp) => {
    // Implement edit functionality
    setUpdatecamp(camp)
     setIsOpen(true)
  };
  const closeModal =()=>{
    setIsOpen(false)
  }

  const handleDelete = (id) => {
   
    // Implement delete functionality
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
        campDetails={updatecamp} loading={isLoading}></UpdateCampFrom>
    </>

    
  )
}

export default ManageCamps
