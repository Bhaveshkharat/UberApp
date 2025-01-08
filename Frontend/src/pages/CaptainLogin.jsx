import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
   const [email, setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [captainData,setCaptainData] = useState('')
  
    const submitHandler = (e)=>{
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      })
      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className="w-16 mb-10" src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className='text-xl mb-2'>What's your email</h3>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type = "email" placeholder='exmail@example.com'/>
        <h3 className='text-xl mb-2 mt-4'>Enter Password</h3>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg  placeholder:text-base' required type="password" placeholder='password'/>
        <button className='bg-[#111] text-fff font-semibold text-white rounded px-4 py-2 mt-4 border w-full text-lg placeholder:text-base'>Login</button>
        <p className='text-center'>Join as Captain?<Link to = '/captain-signups' className='text-blue-600'>Register Here</Link></p>
      </form>
      
      </div>
      <div>
        <Link to='/logins' className='flex items-center justify-center bg-[#5fc654] rounded mb-4 font-semibold px-4 py-2 border w-full mt-4 text-lg placeholder:text-base'>Sign In as User</Link>
      </div>
      
    </div>
  )
}

export default CaptainLogin
