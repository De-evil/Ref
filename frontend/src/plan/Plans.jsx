import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Plans = () => {
  const [works, setWorks ] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-works").then(res=> res.json()).then(data => setWorks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px24 '>
      <h2 className='text-5xl font-bold text-center'> All of Our works are here</h2>
      <div className='grid gap-8 my-12 lg-grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          works.map(work => <Card
          >
            <img src={work.imageURL} alt=''  className='h-94'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {work.Name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto consequatur nihil tempora. Fuga, ut cum.
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>View more</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Plans