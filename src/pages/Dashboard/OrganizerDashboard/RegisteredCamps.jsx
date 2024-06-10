import Heading from "../../../components/Shared/Heading"
import ParticipantsTable from "../../../components/dashboard/OrganizerDashboard/AddACamp/ParticipantsTable"
import { Helmet } from 'react-helmet-async'
import {
  useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import Swal from 'sweetalert2'
import toast from "react-hot-toast"

function RegisteredCamps() {
const axiosSecure = useAxiosSecure()
 const {data : participants =[],isLoading,refetch} =useQuery({
  queryKey : ['allRgisterUser'],
  queryFn : async() =>{
    const {data} =await axiosSecure('/allRegisterUser')
    return data
  }
})
const handleCancel = (id) => {
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

//handle payment status
const handlePaymentsStatus = (id) =>{
try {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to panding to Confirmed",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then(async(result) => {
    if (result.isConfirmed) {
    const {data} =await axiosSecure.patch(`/StatusConfirmed/${id}`)
    refetch()
    toast.success("Update Confirmed successful")                               
    }
  });
} catch (error) {
  
}
}
  return (
    <div>
      <Helmet title="All Registered Camps"></Helmet>
     <Heading title="All Participants" subtitle="All Cams Registered Users" center="center"></Heading>

     {/* /// registered user table */}
     <ParticipantsTable handleCancel={handleCancel} participants={participants} handlePaymentsStatus={handlePaymentsStatus}></ParticipantsTable>
    </div>
  )
}

export default RegisteredCamps
