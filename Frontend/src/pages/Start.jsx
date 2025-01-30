import React from 'react'
import { Link } from 'react-router-dom'


const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-top bg-[url(https://static.vecteezy.com/system/resources/previews/007/783/942/non_2x/businesswoman-using-smartphone-for-cab-booking-vector.jpg)] h-screen pt-8 w-full flex justify-between flex-col '>
        <img className="w-16 ml-8" src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
           <div className='bg-white pd-7 py-5 px-5'>
              <h2 className='text-3xl font-bold'>Get started with Uber</h2>
              <Link to='/logins' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
           </div>
      </div>
    </div>
  )
}

export default Start
