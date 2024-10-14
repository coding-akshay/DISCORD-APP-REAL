import { useState } from 'react'
import './App.css'
import Tabsone from './component/Tabs one'
import Tabstwo from './component/Tabs two'
import Friendsrequest from './component/Friendsrequest'
import Clips from './component/Clips'
import Conection from './component/Conection'
import Devices from './component/Devices'
import Authorized from './component/Authorized'
import FamilyCenter from './component/FamilyCenterMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FamilyCenterMain from './component/FamilyCenterMain'

function App() {

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

export default App
