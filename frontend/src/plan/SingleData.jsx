import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleData = () => {
   const {_id, Name} = useLoaderData();
    
  return (
    <div className='mt-28 px-4 lg:px-24'> 
        <img src={imageURL} alt="" className='h-96'/>
       <h2>{Name}</h2> 
    </div>
  )
}

export default SingleData
