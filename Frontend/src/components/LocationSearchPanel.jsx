import React from 'react'

const LocationSearchPanel = (props)=> {

const locations = [
    "G H Raisoni College Of Engineering, Wadi",
    "211,Kapoor,s Building, 2nd Floor, Near Ravi Nagar Square, Nagpur",
    "Yashwantrao Chavhan square, Dhantoli, Nagpur",
    "City hospital, Bajaj nagar, Jalgaon",   
]

  return (
    <div>
      {locations.map(function(elem,idx){
        return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true)
          props.setPanelOpen(false)}}
        className='flex border-2 p-3 border-grey-50 active:border-black rounded-xl items-center justify-start gap-4 my-2'>
        <h2 className='bg-[#eee] h-10 w-16 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
        <h4 className='font-medium'>{elem}</h4>
        </div>
      })
      }
       
    </div>
  )
}

export default LocationSearchPanel