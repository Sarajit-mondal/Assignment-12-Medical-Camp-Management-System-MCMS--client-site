import React from 'react'
import Slider from '../../components/Shared/home/slider/Slider'
import PopularCamp from '../../components/popularCamp/PopularCamp'
import { Helmet } from 'react-helmet-async'
import UserReviews from '../../components/Shared/home/Feedback/UserReviews'
import Donate from '../../components/Shared/home/Donate'
import {  useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

function Home() {
  const location = useLocation()
   console.log(location.pathname)
   if(location.pathname === '/success_payment'){
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payment SuccessFull",
      showConfirmButton: false,
      timer: 3000
    });
   }else if(location.pathname === '/fail_payment'){
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Payment Fail Try Agian",
      showConfirmButton: false,
      timer: 1500
    });
   }else if(location.pathname === '/cancel_payment'){
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Payment Cancel ",
      showConfirmButton: false,
      timer: 1500
    });
   }
  return (
    <div>
      <Helmet title='Home'></Helmet>
      <Slider></Slider>
      {/* donate and popularCamp */}
       <section className='flex flex-col md:flex-row'>
        <div className='flex-grow gap-10'> <PopularCamp></PopularCamp></div>
        {/* donation */}
       <Donate />
       </section>
     
      <UserReviews></UserReviews>
    </div>
  )
}

export default Home
