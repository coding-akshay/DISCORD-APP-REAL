import React from 'react'
import Sidebar from '../layout-component/Sidebar'
import '../Discover-component/discover.css'
import ServerOptions from './ServerOptions'
import DiscoverNavbar from './Discover-navbar'




function Discover() {
  return (
    <div className='discover'>
      <Sidebar />
      <ServerOptions/>
      <div className='game-servers'>
        <DiscoverNavbar/>
         <img src="src\assets\Discover-images\community.png" alt="" />
        <h1>its loading..... Be patient</h1>
      </div>
    </div>
  )
}

export default Discover
