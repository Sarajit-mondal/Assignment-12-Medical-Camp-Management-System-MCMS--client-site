import React from 'react'
import Heading from '../../../components/Shared/Heading'
import ManageCampsTable from '../../../components/dashboard/OrganizerDashboard/AddACamp/ManageCampsTable'

function ManageCamps() {
  return (
    <>
    <div className='my-6'>
    <Heading title="Manage Camps" subtitle="Manage every camps update and delete" center="center"></Heading>
    </div>

    {/* // manageCampsTable */}
    <ManageCampsTable ></ManageCampsTable>
    </>
  )
}

export default ManageCamps
