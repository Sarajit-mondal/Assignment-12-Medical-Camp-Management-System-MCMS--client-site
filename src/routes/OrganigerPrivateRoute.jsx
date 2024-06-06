import React from 'react'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../components/Shared/LoadingSpinner'
import useRole from '../hooks/useRole'
import ErrorPage from '../pages/ErrorPage'

function OrganigerPrivateRoute({children}) {
const {loading} = useAuth()
const [role,isLoading] =useRole()

if(loading && isLoading) return <LoadingSpinner />
if(role === "Organizer") return children

return <ErrorPage />

}

export default OrganigerPrivateRoute
