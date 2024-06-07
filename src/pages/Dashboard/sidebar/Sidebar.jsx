import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { GrUserAdmin } from 'react-icons/gr'
import { MdHomeWork } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'

import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import UserLinks from '../DashboardLinks/UserLinks'
import OrganizarLinks from '../DashboardLinks/OrganizarLinks'
import toast from 'react-hot-toast'
import useRole from '../../../hooks/useRole'
import logo from '../../../assets/logo.png'
const Sidebar = () => {
  const { logOutFirebase } = useAuth()
  const [isActive, setActive] = useState(true)
  const navigate = useNavigate()
  const [role,isLoading] = useRole()
  console.log(role)
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
       <div className='bg-gray-100 w-full text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer w-full p-4 font-bold'>
            <Link to='/'>
              <img
                // className='hidden md:block'
                src={logo}
                alt='logo'
                width='200'
                height='100'
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div> 

      {/* Sidebar */}
       <div
        className={`z-10 md:fixed mt-[60px] md:mt-0 flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex md:px-4 md:py-2 shadow-lg rounded-lg justify-center items-center bg-white mx-auto'>
              <Link to='/'>
                <img
                  className='hidden md:block'
                  src={logo}
                  alt='logo'
                  width='200'
                  height='100'
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 -mt-5 md:mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav onClick={handleToggle}>
            
              {/* UserLinks */}
               {
                role ==="Organizer" &&<OrganizarLinks />
                
              } 
              {
                role ==="Participant" &&  <UserLinks />
              }
            

            </nav>
          </div>
        </div>

        <div onClick={()=> setActive(!isActive)}>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to='profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={async()=>
              await logOutFirebase()
              .then(res => {
                toast.success("logOut successful")
                navigate('/')
              })
              .catch(error => toast.error(error.message))
              
            }
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5 text-red-500' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar