import React from 'react'
import Slider from '../../components/Shared/home/slider/Slider'
import PopularCamp from '../../components/popularCamp/PopularCamp'
import { Helmet } from 'react-helmet-async'
import UserReviews from '../../components/Shared/home/Feedback/UserReviews'
import Donate from '../../components/Shared/home/Donate'

function Home() {
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
