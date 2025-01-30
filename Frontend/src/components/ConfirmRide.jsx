import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={()=>{
          props.setVehiclePanel(false)
        }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Confirm your Vehicle</h3>

        <div className='flex justify-between items-center flex-col'>
          <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1554506931/navigation/UberXL.png" alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/211-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kapoor,s Building, Near Ravi Nagar, Nagpur</p>
            </div>
          </div>
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
        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)
        }} className='w-full mt-5 bg-[#5fc654] text-black font-semibold p-2 rounded-lg'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide
