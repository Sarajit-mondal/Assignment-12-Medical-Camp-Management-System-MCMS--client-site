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
   <div >
     <div className="flex justify-center items-center py-5">
    <div className="w-full md:w-86  rounded-lg p-6 space-y-6">
      {/* Donate Section */}
      <h2 className="text-2xl font-bold text-center text-gray-800">Donate Us</h2>
      <button
        onClick={handleDonate}
        className="w-full bg-blue-500 border-2 border-orange-500 text-white font-semibold py-2 rounded-full uppercase hover:bg-blue-600 transition-all transform hover:scale-105"
      >
        Donate Now
      </button>
  
    <div className='h-screen overflow-y-auto custom-scroll pr-3'>
        {/* Donated Persons Section */}
        <div className="grid grid-cols-1 gap-5 ">
        {[
          { name: "Jit Roy", amount: 567, imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
          { name: "Jit Roy", amount: 567, imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
          { name: "Jit Roy", amount: 567, imgSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
          { name: "Rakib", amount: 500, imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
          { name: "Rabi", amount: 900, imgSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
          { name: "Nir Rani", amount: 600, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-SYs7TwaEVuCWS-MPjQTeFwIC_C8IJPznnowFYwh-twB-ADdpXk_SN5YGDjvWxBXihQs&usqp=CAU" },
        ].map((donor, index) => (
          <div key={index} className="rounded-md overflow-hidden bg-gray-50 shadow hover:shadow-md transition-shadow">
            <img
              src={donor.imgSrc}
              alt={donor.name}
              className="w-full h-40 object-cover"
            />
            <div className="flex items-center justify-between px-4 py-3 bg-white">
              <h3 className="text-lg font-semibold text-gray-700">{donor.name}</h3>
              <p className="font-bold text-gray-900">${donor.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>
   </div>
  
  )
}

export default Donate
