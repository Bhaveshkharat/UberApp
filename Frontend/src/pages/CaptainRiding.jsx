import React, {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)

  useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
      }else{
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])

  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://logospng.org/download/uber/logo-uber-4096.png" alt="" />
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-4/5'>
       <img className='h-full w-full object-cover' src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif" alt="" />
       </div>
       <div className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-100' onClick={()=>{
          setFinishRidePanel(true)
       }}>
       <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={()=>{
      }}><i className="text-3xl text-black ri-arrow-up-wide-fill"></i></h5>
         <h4 className='text-xl font-semibold'>400m away</h4>
         <button  className=' bg-[#5fc654] text-black font-semibold p-3 px-10 rounded-lg'>Complete ride</button>
       </div>
       <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
       
    </div>
  )
}

export default CaptainRiding
