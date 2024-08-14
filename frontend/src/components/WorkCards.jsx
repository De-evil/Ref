import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdPreview } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { Fa42Group, FaCartShopping } from 'react-icons/fa6';

const WorkCards = ({headline, work}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* Cards */}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {
            work.map(work => <SwiperSlide key={work._id}>
                <Link to={`/work/{work._id}`}> 
                <div className='relative'>
                    <img src={work.imageURL} alt=''/>
                    <div className='absolute top-0 right-1 bg-black-300 hover:bg-blue-400 p-2 rounded'>
                    <MdPreview className='w-3 h-3 text-white' />
                    </div>
                </div>
                <div>
                    <div>
                    <h3>{work.Name}</h3>
                    </div>
                </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default WorkCards