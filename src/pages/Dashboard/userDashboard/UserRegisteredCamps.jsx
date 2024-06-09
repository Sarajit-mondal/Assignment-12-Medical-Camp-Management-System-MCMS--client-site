import React from 'react'
import CampParticipantsTable from '../../../components/dashboard/UserDashboard/CampParticipantsTable';
import Heading from '../../../components/Shared/Heading';
import useMyjoinCamp from '../../../hooks/useMyjoinCamp';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'



function UserRegisteredCamps() {
  const axiosSecure = useAxiosSecure()
   const {data : participant = [],isLoading,refetch} = useMyjoinCamp()
    console.log(participant)
      const handleFeedback = (id) => {
        console.log(`Provide feedback for participant with id: ${id}`);
        // Implement feedback functionality
      };
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
    <div className='space-y-4'>
     <Heading  title="Registered Camps" subtitle="This is your all Registered Camps" center="center"></Heading>

      {/* user registeredCamps */}
      <CampParticipantsTable participants={participant}
      onFeedback={handleFeedback} onCancel={handleCancel} refetch={refetch} ></CampParticipantsTable>
    </div>
  )
}

export default UserRegisteredCamps
