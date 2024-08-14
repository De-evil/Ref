import React from 'react'
import Banner from '../components/Banner'
import BestWorks from './BestWorks'
import OurProject from './OurProject'
import PromoBanner from './PromoBanner'
import OtherWorks from './OtherWorks'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestWorks/>
      <OurProject/>
      <PromoBanner/>
      <OtherWorks/>
      <Review/>
    </div>
  )
}

export default Home