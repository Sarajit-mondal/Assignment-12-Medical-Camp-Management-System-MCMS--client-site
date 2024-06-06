import Heading from "../../../components/Shared/Heading"
import ParticipantsTable from "../../../components/dashboard/OrganizerDashboard/AddACamp/ParticipantsTable"


function RegisteredCamps() {
  return (
    <div>
     <Heading title="All Participants" subtitle="All Cams Registered Users" center="center"></Heading>

     {/* /// registered user table */}
     <ParticipantsTable ></ParticipantsTable>
    </div>
  )
}

export default RegisteredCamps
