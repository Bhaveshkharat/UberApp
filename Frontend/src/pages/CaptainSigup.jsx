import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainSigup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()    //to stop reloading the page
    setUserData({
      fullName:{
      firstName: firstName,
      lastName: lastName
      },
      email: email,
      password: password
    })

    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className="w-16 mb-4" src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
      <h3 className='text-xl mb-2'>What's your Name</h3>
      <div className='flex gap-2'>
      <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} className='bg-[#eeeeee] w-1/2 rounded  px-4 py-2 mb-7 border text-lg placeholder:text-base' required type = "text" placeholder='First name'/>
      <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}} className='bg-[#eeeeee] w-1/2 rounded mb-7 px-4 py-2 border text-lg placeholder:text-base' required type = "text" placeholder='Last name'/>
      </div>
      <h3 className='text-xl mb-2'>What's your email</h3>
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base' required type = "email" placeholder='exmail@example.com'/>
      <h3 className='text-xl mb-2 mt-4'>Enter Password</h3>
      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg  placeholder:text-base' required type="password" placeholder='password'/>
      <button className='bg-[#111] text-fff font-semibold text-white rounded px-4 py-2 mt-4 border w-full text-lg placeholder:text-base'>Create account</button>
      <p className='text-center'>Already have Account?<Link to = '/captain-logins' className='text-blue-600'>Login Here</Link></p>
    </form>
    
    </div>
    <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    
  </div>
  )
}

export default CaptainSigup
