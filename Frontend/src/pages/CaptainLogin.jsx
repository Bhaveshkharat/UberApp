import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogin = () => {
   const [email, setEmail] = useState('')
   const [password,setPassword] = useState('')

   const {captain,setCaptain} = React.useContext(CaptainDataContext)
   const navigate = useNavigate()
  
    const submitHandler = async (e)=>{
      e.preventDefault();
      const captain = {
        email:email,
        password:password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/logins`,captain)
      if(response.status === 200){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }

      setEmail('')
      setPassword('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className="w-16 mb-10" src="https://th.bing.com/th/id/OIF.0iCjgyIRoOU08DZWtbuZUw?w=165&h=169&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
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
