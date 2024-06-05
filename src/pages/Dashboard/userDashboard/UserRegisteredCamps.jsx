import React from 'react'
import CampParticipantsTable from '../../../components/dashboard/UserDashboard/CampParticipantsTable';
import Heading from '../../../components/Shared/Heading';


function UserRegisteredCamps() {
    const participant = {
        id: 1,
        campName: 'Summer Health Camp',
        campFees: '$200',
        name: 'John Doe',
        paymentStatus: 'Paid',
        paymentConfirmationStatus: 'Confirmed'
      };
    
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
      <CampParticipantsTable participant={participant}
      onFeedback={handleFeedback} onCancel={handleCancel}></CampParticipantsTable>
    </div>
  )
}

export default UserRegisteredCamps
