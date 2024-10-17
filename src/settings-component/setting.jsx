import { useState } from 'react'
import './Settings.css'
import Tabsone from './Tabs one'
import Tabstwo from './Tabs two'
import Friendsrequest from './Friendsrequest'
import Clips from './Clips'
import Conection from './Conection'
import Devices from './Devices'
import Authorized from './Authorized'
import FamilyCenter from './FamilyCenterMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FamilyCenterMain from './component/FamilyCenterMain'

function Settings() {

  return (
    <Router>
      <div className='conteiner'>
        <div className="tabs-one">
          <Tabsone />
        </div>
        <div className="tabs-two">
          <Routes>
            <Route path="/" element={<Tabstwo />} />
            <Route path="/friends-request" element={<Friendsrequest />} />
            <Route path="/clips" element={<Clips />} />
            <Route path="/conection" element={<Conection />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/Authorized" element={<Authorized />} />
            <Route path="/familycenter" element={<FamilyCenter/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Settings
