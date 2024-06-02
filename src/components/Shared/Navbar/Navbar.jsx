
import { AiOutlineMenu } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import { useState } from 'react'

import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)



  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <div className='flex flex-row  items-center justify-between gap-3 md:gap-0 max-w-[1180px] mx-auto w-11/12'>
          {/* Logo */}
          <Link to='/'>
            <img
              // className='hidden md:block'
              src='https://i.ibb.co/4ZXzmq5/logo.png'
              alt='logo'
              width='100'
              height='100'
            />
          </Link>

          <div className='space-x-5 font-bold'>
            <NavLink to='/camps'>
            Available Camps
            </NavLink>
            {/* //join with us Dropdown */}
            <Dropdown >
              <MenuButton> <NavLink>Join US</NavLink></MenuButton>
              <Menu className='z-20 mt-4'>
                <MenuItem>
                  <Link
                    to='/signup'
                    className='px-4 pt-3 transition font-semibold'
                  >
                    Sign Up
                  </Link>
                </MenuItem>
                <MenuItem className='mt-3'>
                  <Link
                    to='/login'
                    className='px-4 py-3 transition font-semibold'
                  >
                    Login
                  </Link>
                </MenuItem>
              </Menu>
            </Dropdown>

          </div>

          {/* Dropdown Menu */}
          <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
              {/* Become A Host btn */}
              <div className='hidden md:block'>
              </div>
              <div
                onClick={() => setIsOpen(!isOpen)}
                className='p-4 md:py-1 md:px-3 border-[1px] border-blue-500 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
              >
                <AiOutlineMenu />
                <div className='hidden md:block'>
                  {/* Avatar */}
                  <img
                    className='rounded-full size-10'
                    src={user && user.photoURL ? user.photoURL : avatarImg}
                    alt='profile'

                  />
                </div>
              </div>
            </div>
            {isOpen && (
              <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                <div className='flex flex-col cursor-pointer'>
                  <Link
                    to='/'
                    className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                  >
                   {user && user.dispalyName ? user.dispalyName :" user Name"}
                  </Link>
                  {/* dasbord */}
                  <Link
                    to='dashboard'
                    className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                  >
                    Dashboard
                  </Link>

                  {user ? (
                    <>
                      <div
                        onClick={() => logOut()}
                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>

                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar