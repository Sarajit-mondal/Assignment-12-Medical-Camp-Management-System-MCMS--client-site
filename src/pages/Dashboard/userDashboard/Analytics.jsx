import React from 'react'
import SalesLineChart from '../../../components/dashboard/UserDashboard/SalesLineChart'
import UserStatistics from '../../../components/dashboard/UserDashboard/UserStatistics'
import { Helmet } from 'react-helmet-async'

function Analytics() {
  return (
    <div>
      <Helmet title='Analytics'></Helmet>
      {/* AnlyTics */}
      <UserStatistics></UserStatistics>
    </div>
  )
}

export default Analytics
