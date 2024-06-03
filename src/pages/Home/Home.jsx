import React from 'react'
import Slider from '../../components/Shared/home/slider/Slider'
import PopularCamp from '../../components/popularCamp/PopularCamp'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
      <Helmet title='Home'></Helmet>
      <Slider></Slider>
      <PopularCamp></PopularCamp>
    </div>
  )
}

export default Home
