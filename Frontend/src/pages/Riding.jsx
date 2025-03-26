import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-1/2 p-4'>
      <div className='flex items-center justify-between'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Vaibhav</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH40M9193</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki</p>
          </div>
      </div>

        <div className='flex justify-between items-center flex-col'>
        <div className='w-full mt-5'>
          
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/211-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kapoor,s Building, Near Ravi Nagar, Nagpur</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
          <i className="text-lg ri-currency-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              
            </div>
          </div>
        </div>
        </div>
         <button className='w-full mt-5 bg-[#5fc654] text-black font-semibold p-2 rounded-lg'>Make a payment</button>
      </div>
    </div>
  )
}

export default Riding
