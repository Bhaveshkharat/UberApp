import React, { UserContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSigup from './pages/CaptainSigup'
import { UserDataContext } from './context/userContext'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logins" element={<UserLogin />} />
        <Route path="/signups" element={<UserSignup />} />
        <Route path="/captain-logins" element={<CaptainLogin />} />
        <Route path="/captain-signups" element={<CaptainSigup />} />
      </Routes>
    </div>
  )
}

export default App

