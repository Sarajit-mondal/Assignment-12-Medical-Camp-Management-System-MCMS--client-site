import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Dashboard/sidebar/Sidebar'

function Dashboard() {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div>
        <Sidebar/>
      </div>
      <div className='md:flex-1 md:ml-64 mx-auto'>
       <div className='p-5'>
        <Outlet></Outlet>
       </div>
      </div>
    </div>
  )
}

export default Dashboard
