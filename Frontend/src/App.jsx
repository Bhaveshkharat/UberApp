import React, { UserContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSigup from './pages/CaptainSigup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'


const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/logins" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/signups" element={<UserSignup />} />
        <Route path="/captain-logins" element={<CaptainLogin />} />
        <Route path="/captain-signups" element={<CaptainSigup />} />
        <Route path="/home" element={
          <UserProtectWrapper>
            <Home />
          </UserProtectWrapper>
        } />
        <Route path="/user/logouts" element={
          <UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>
        } />
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
          <CaptainHome />
          </CaptainProtectWrapper>
        } />

      </Routes>
    </div>
  )
}

export default App

