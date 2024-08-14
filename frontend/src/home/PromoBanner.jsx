import React from 'react'
import { Link } from 'react-router-dom';
import PromoBannerImg from '../assets/Images/promo.jpg'

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Lorem ipsum dolor sit amet.</h2>
                <Link to="/plan" className='block'> <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all durartion-300' >Explore </button></Link>
            </div>

            <div>
                <img src={PromoBannerImg} alt=""className='w-96'  />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner