import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={()=>{
          props.WaitingForDriver(false)
        }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-fill"></i></h5>
        
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
        </div>
    </div>
  )
}

export default WaitingForDriver
