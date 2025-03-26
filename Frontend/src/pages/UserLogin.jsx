import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext.jsx'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userData,setUserData] = useState('')

  const {user,setUser} = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e)=>{
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    }

    const respone = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/logins`,userData)
    
    if(respone.status === 200){
      const data = respone.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
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
        <p className='text-center'>New user?<Link to = '/signups' className='text-blue-600'>Create new Account</Link></p>
      </form>
      
      </div>
      <div>
        <Link to='/captain-logins' className='flex items-center justify-center bg-[#5fc654] rounded mb-4 font-semibold px-4 py-2 border w-full mt-4 text-lg placeholder:text-base'>Sign In as Captain</Link>
      </div>
      
    </div>
  )
}

export default UserLogin
