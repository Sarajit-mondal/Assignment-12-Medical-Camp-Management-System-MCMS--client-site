import React from 'react'
import Heading from '../../../components/Shared/Heading'
import AddCampForm from '../../../components/dashboard/OrganizerDashboard/AddACamp/AddCampFrom'

function AddACamp() {
  return (
    <div>
      <Heading title="Add A Camp" subtitle="Add new Medical Camp" center="center"></Heading>

      {/* // add Camp From  */}
      <AddCampForm></AddCampForm>
    </div>
  )
}

export default AddACamp
