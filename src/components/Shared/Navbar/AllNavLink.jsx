import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import useAuth from '../../../hooks/useAuth';
function AllNavLink() {
const {user} = useAuth()
  return (
    <div className='space-x-5 font-bold flex flex-col md:flex-row gap-y-3 justify-start'>
       <NavLink to='/allCamps' className='ml-5 md:ml-0'>
              Available Camps
        </NavLink>
       <NavLink to='/about'>
             About Us
        </NavLink>
       {
        user &&  <NavLink to='/contact'>
                 Contact Us
                 </NavLink>
       }

            {/* //join with us Dropdown */}
            {
              !user && <Dropdown >
                <MenuButton> <NavLink to='/login'>Join US</NavLink></MenuButton>
              </Dropdown>
            }
    </div>
  )
}

export default AllNavLink
