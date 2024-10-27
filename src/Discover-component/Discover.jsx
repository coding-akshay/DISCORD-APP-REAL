import React from 'react'
import Sidebar from '../layout-component/Sidebar'
import '../Discover-component/discover.css'
import ServerOptions from './ServerOptions'
import DiscoverNavbar from './Discover-navbar'
import { community } from '../assets/Discover-images/community.png';



function Discover() {
  return (
    <div className='discover'>
      <Sidebar />
      <ServerOptions/>
      <div className='game-servers'>
        <DiscoverNavbar/>
        <img src='src/assets/help-images/community.png' alt='it will be here' className='community-pic'/>
        <h1>its loading..... Be patient</h1>
      </div>
    </div>
  )
}

export default Discover
