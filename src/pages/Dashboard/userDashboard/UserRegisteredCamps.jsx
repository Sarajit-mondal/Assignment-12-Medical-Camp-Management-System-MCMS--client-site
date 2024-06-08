import React from 'react'
import CampParticipantsTable from '../../../components/dashboard/UserDashboard/CampParticipantsTable';
import Heading from '../../../components/Shared/Heading';
import useMyjoinCamp from '../../../hooks/useMyjoinCamp';


function UserRegisteredCamps() {
   const {data : participant = [],isLoading,refetch} = useMyjoinCamp()
    console.log(participant)
      const handleFeedback = (id) => {
        console.log(`Provide feedback for participant with id: ${id}`);
        // Implement feedback functionality
      };
    
      const handleCancel = (id) => {
        console.log(`Cancel participation for id: ${id}`);
        // Implement cancel functionality
      };
  return (
    <div className='space-y-4'>
     <Heading  title="Registered Camps" subtitle="This is your all Registered Camps" center="center"></Heading>

      {/* user registeredCamps */}
      <CampParticipantsTable participants={participant}
      onFeedback={handleFeedback} onCancel={handleCancel}></CampParticipantsTable>
    </div>
  )
}

export default UserRegisteredCamps
