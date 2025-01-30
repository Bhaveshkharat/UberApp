import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSigup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain, setCaptain} = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()    //to stop reloading the page
    const captainData={
      fullname:{
      firstname: firstName,
      lastname: lastName
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/registers`, captainData)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className="w-16 mb-4" src="https://th.bing.com/th/id/OIF.0iCjgyIRoOU08DZWtbuZUw?w=165&h=169&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
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
      <h3 className='text-xl mb-2 mt-4'>Vehicle Information</h3>
      <div className='flex gap-2 mb-4'>
        <input 
          value={vehicleColor} 
          onChange={(e) => setVehicleColor(e.target.value)} 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
          required 
          type="text" 
          placeholder='Vehicle Color'
        />
        <input 
          value={vehiclePlate} 
          onChange={(e) => setVehiclePlate(e.target.value)} 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
          required 
          type="text" 
          placeholder='Vehicle Plate Number'
        />
      </div>
      <div className='flex gap-2 mb-4'>
        <select 
          value={vehicleType} 
          onChange={(e) => setVehicleType(e.target.value)} 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg'
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
        </select>
        <input 
          value={vehicleCapacity} 
          onChange={(e) => setVehicleCapacity(e.target.value)} 
          className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
          required 
          type="number" 
          placeholder='Seating Capacity'
        />
      </div>
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
