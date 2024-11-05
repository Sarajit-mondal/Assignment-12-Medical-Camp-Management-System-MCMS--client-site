
import { Helmet } from 'react-helmet-async'
import useAuth from '../../hooks/useAuth'
import LoadingSpinner from '../Shared/LoadingSpinner'
import useRole from '../../hooks/useRole'
import UpdateProfile from '../model/UpdateProfile'
import { useState } from 'react'
import { useImageUpload } from '../../hooks/useImageUpload'
import toast from 'react-hot-toast'

const Profile = () => {
  const { user,loading,updateUserProfile } = useAuth()
  const [role] = useRole()
  const [isOpen,setIsOpen] = useState(false)
  const [isloading,setIsLoading]=useState(false)

  //update submit
  const onSubmit = async(data) =>{
    setIsLoading(true)
    const name = data.name;
    let image = ''
    if(data.files.length < 1){
     image = user?.photoURL;
    }else{
        image = await useImageUpload(data.files[0])
    }
   console.log(image)
    try {
      await updateUserProfile(name,image)
      toast.success("Profile Update Success")
    } catch (error) {
      toast.error(error.message)
    }finally{
      closeModal(false)
      setIsLoading(false)
    }
    
  
   
  }

  // close modle
  const closeModal =() =>{
    setIsOpen(false)
  }

  if(loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-2xl w-full md:w-3/5'>
        <img
          alt='profile'
          src='https://img.freepik.com/premium-photo/close-up-computer-keyboard_1048944-5570471.jpg?w=826'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={user?.photoURL}
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-blue-500 rounded-full'>
           {role.toUpperCase()}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {user?.uid}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {user?.displayName}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{user?.email}</span>
              </p>

              <div>
                <button onClick={()=> setIsOpen(true)} className='bg-blue-500 px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#1f4ece] block mb-1'>
                  Update Profile
                </button>
                <button className='bg-blue-500 px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#2173be]'>
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //update profile modle */}
      <UpdateProfile isOpen={isOpen} closeModal={closeModal}
        onSubmit={onSubmit}
        user={user} loading={isloading}></UpdateProfile>
    </div>
  )
}

export default Profile