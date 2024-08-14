import React from 'react'
import { Link } from 'react-router-dom';
import OurProjectImg from '../assets/Images/w2.jpg'


const OurProject = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex felx-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <img src={OurProjectImg} alt='' className='rounded md:w10/12'/>
            </div>

            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find our Works <span className='test-blue-700'>Premium Projects</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
                 iusto? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, suscipit. </p>

                 {/*Stats  */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 md: w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>150+</h3>
                        <p className='text-base'>Clients</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>250+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>100+</h3>
                        <p className='text-base'>Projects</p>
                    </div>
                </div>
            <Link to="/plan" className='mt-12 block'> <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all durartion-300' > Explore More</button></Link> 
            </div>
    </div>
  )
}

export default OurProject