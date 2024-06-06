import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useAuth from '../hooks/useAuth'
import useRole from '../hooks/useRole'
import AddACamp from '../pages/Dashboard/OrganizerDashboard/AddACamp'
import ErrorPage from '../pages/ErrorPage'

function ParticipantPrivateRoute({children}) {
const {loading} = useAuth()
const [role,isLoading] =useRole()

if(loading && isLoading) return <LoadingSpinner />
if(role === "Participant") return children

return <AddACamp></AddACamp>

}

export default ParticipantPrivateRoute
