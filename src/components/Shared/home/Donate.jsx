import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'

function Donate() {
  const axiosSecure = useAxiosSecure()
  const handleDonate =async()=>{
   try {
    const {data} =await axiosSecure.post('/create_payment',{amount:1000,currency:"USD"})
    //(data)
    const redirectUrl = data.paymentUrl;
    if(redirectUrl){
      window.location.replace(redirectUrl)
    }
   } catch (error) {
    
   }
  }
  return (
    <div>
       <div className='w-full md:w-52 text-center space-y-4 mt-16 p-4'>
          {/* donate button */}
          <h2 className='text-3xl font-bold'>Donate Us</h2>
          <button onClick={handleDonate} class="bg-blue-500 border-2 text-white border-orange-500 font-bold py-2 px-4 rounded-full uppercase   hover:bg-blue-600 transition-all animate-bounce">
          Donate Now
          </button>
          {/* all donated person */}
          <div className='grid grid-cols-2 md:grid-cols-1 space-y-5'>
             <div>
               <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full px-2 md:px-3 min-h-40'/>
              <div className='flex items-center justify-between px-2 md:px-4'>
              <h3 className='text-lg font-bold'>Jit Roy</h3>
              <p className='font-bold'>$567</p>
              </div>
             </div>
             <div>
               <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full px-2 md:px-3 min-h-40'/>
              <div className='flex items-center justify-between px-2 md:px-4'>
              <h3 className='text-lg font-bold'>Rakib</h3>
              <p className='font-bold'>$500</p>
              </div>
             </div>
             <div>
               <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full px-2 md:px-3 min-h-40'/>
              <div className='flex items-center justify-between px-2 md:px-4'>
              <h3 className='text-lg font-bold'>Rabi </h3>
              <p className='font-bold'>$900</p>
              </div>
             </div>
             <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SYs7TwaEVuCWS-MPjQTeFwIC_C8IJPznnowFYwh-twB-ADdpXk_SN5YGDjvWxBXihQs&usqp=CAU" alt="" className='w-full px-2 md:px-3 min-h-40'/>
              <div className='flex items-center justify-between px-2 md:px-4'>
              <h3 className='text-lg font-bold'>Nir Rani</h3>
              <p className='font-bold'>$600</p>
              </div>
             </div>
            
          </div>
        </div>
    </div>
  )
}

export default Donate
