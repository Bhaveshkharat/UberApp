import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={()=>{
          props.setVehiclePanel(false)
        }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose Vehicle type</h3>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          
        }} className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl justify-between items-center'>
           <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
           <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-gray-600 text-xs'>Affordable, compact rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹193.20</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          
        }} className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl justify-between items-center'>
           <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
           <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-gray-600 text-xs'>Affordable motorcycle rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹65.35</h2>
        </div>

        <div onClick={()=>{
          props.setConfirmRidePanel(true)
          
        }} className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl justify-between items-center'>
           <img className='h-12' src="https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?rs=1&pid=ImgDetMain" alt="" />
           <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>5 mins away</h5>
            <p className='font-normal text-gray-600 text-xs'>Affordable, Auto rides</p>
           </div>
           <h2 className='text-lg font-semibold'>₹103.26</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
