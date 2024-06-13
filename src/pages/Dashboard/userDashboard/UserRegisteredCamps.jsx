import React, { useEffect, useState } from 'react'
import CampParticipantsTable from '../../../components/dashboard/UserDashboard/CampParticipantsTable';
import Heading from '../../../components/Shared/Heading';
import useMyjoinCamp from '../../../hooks/useMyjoinCamp';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import UserFeedback from '../../../components/model/UserFeedback';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async'
import useAxiosCommon from '../../../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';


function UserRegisteredCamps() {
  const axiosSecure = useAxiosSecure()
  const axiosCommon = useAxiosCommon()
  const {user,loading} = useAuth()
  const [isOpen,setIsOpen] = useState(false)
  // pagination 
const [totalData,setTotalData] = useState(1)
const [showPerPage,setShowPerPage] = useState(5)
const [currentPage,setCurrentPage] = useState(1)
const total = async()=>{
  const { data } = await axiosCommon.get(`/allcampCount`);
  console.log("count data",data.registeredCount)
    setTotalData(data.registeredCount)
    
}
total()

// pagination 
const {data : participant = [],refetch} = useQuery({
    queryKey : ['allCamp'],
    enabled: !loading && !!user?.email,
    queryFn : async() => getAllCampData()
  })
  const getAllCampData =async()=>{
    const { data } = await axiosSecure.get(`/myCamps/${user?.email}?limit=${showPerPage}&page=${currentPage}`);
    return data
  }
  useEffect(()=>{
    refetch()
  },[currentPage,totalData,showPerPage])
    //handle feedback
    const onSubmit = async(data) =>{
     const userFeedback = {
      ...data,
      Name : user?.displayName,
      email : user?.email
     }
     try {
      await axiosSecure.post('/feedback',userFeedback)
      toast.success("User Feedback complete")
     } catch (error) {
      toast.error(error.message)
     }finally{
      closeModal()
     }
    }
      const handleFeedback = (id) => {
        // Implement feedback functionality
       setIsOpen(true)
      };
      const closeModal = ()=>{
     setIsOpen(false)
      }    
      //delete joined camp
      const handleCancel = async(id) => {
        console.log(`Cancel participation for id: ${id}`);
        // Implement cancel functionality
        try {
          Swal.fire({
            title: "Are you sure?",
            text: "You want to delete",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
              //delete featch
              await axiosSecure.delete(`/deleteRegisteredCamps/${id}`)
              toast.success("Delete Successfull")
              refetch()
            }
          });
       
        } catch (error) {
          toast.error(error.message)
        }
      };
  return (
    <>
    <Helmet title='User Registered Camps'></Helmet>
    <div className='space-y-4'>
     <Heading  title="Registered Camps" subtitle="This is your all Registered Camps" center="center"></Heading>

      {/* user registeredCamps */}
      <CampParticipantsTable participants={participant}
      onFeedback={handleFeedback} onCancel={handleCancel} refetch={refetch} totalData={totalData}showPerPage={showPerPage}setShowPerPage={setShowPerPage}setCurrentPage={setCurrentPage} currentPage={currentPage}></CampParticipantsTable>
    </div>
    {/* mondal */}
    <UserFeedback  isOpen={isOpen} closeModal={closeModal} onSubmit={onSubmit}></UserFeedback>
    </>
  )
}

export default UserRegisteredCamps
