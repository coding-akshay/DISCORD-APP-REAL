import { useState } from 'react'
import './Settings.css'
import Tabsone from './TabsOne'
import Tabstwo from './TabsTwo'
import Friendsrequest from './Friendsrequest'
import Clips from './Clips'
import Conection from './Conection'
import Devices from './Devices'
import Authorized from './Authorized'
import FamilyCenter from './FamilyCenterMain'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ServerBooster from './ServerBooster'
// import ServerBooster from './ServerBooster'
// import FamilyCenterMain from './component/FamilyCenterMain'

import'./settings_index.css'
function Settings() {
  const [activeComponentMain, setActiveComponentMain] = useState('TabsTwo');

  const handleMenuClickMain = (component) => {
    setActiveComponentMain(component);
  };
  return (
   


    <div className='conteiner'>
    <div className="tabs-one">
      
      <Tabsone handleMenuClickMain={handleMenuClickMain}/>

    </div>
    <div className="tabs-two">
      {activeComponentMain === 'TabsTwo' && <Tabstwo/>}
      {activeComponentMain === 'friend-request' && <Friendsrequest/>}
      {activeComponentMain === 'Family-Center' && <FamilyCenter/>}
      {activeComponentMain === 'Authorized' && <Authorized/>}
      {activeComponentMain === 'Devices' && <Devices/>}
      {activeComponentMain === 'Clips' && <Clips/>}
      {activeComponentMain === 'Connection' && <Conection/>}
      {activeComponentMain === 'Server-Boosts' && <ServerBooster/>}

      {/* <Conection/> */}
      {/* <ServerBooster/> */}
    </div>
   </div>

  )
}

export default Settings




