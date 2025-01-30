import React,{useContext,useEffect,useState} from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


    const CaptainProtectWrapper = ({
        children
    }) => {
    const token = localStorage.getItem('token')
    console.log(token)
    const navigate = useNavigate()
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
      if (!token) {
          navigate('/captain-logins')
      }

      axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profiles`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(response => {
          if (response.status === 200) {
              setCaptain(response.data.captain)
              setIsLoading(false)
          }
      })
          .catch(err => {
              console.log(err)
              localStorage.removeItem('token')
              navigate('/captain-logins')
          })
  }, [ token ])
      
    if(isLoading){
      return(
        <div>Loading...</div>
      )
    }


  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper