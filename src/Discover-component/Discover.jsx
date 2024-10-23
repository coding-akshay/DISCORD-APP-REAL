import React from 'react'
import Sidebar from '../layout-component/Sidebar'
import '../Discover-component/discover.css'


function Discover() {
  return (
    <div className='discover'>
      <Sidebar />
      <div className='server-quests'> 
          <h1 className='discover-text'>DISCOVER</h1>
      </div>
      <div className='game-servers'>
        <h1>its loading..... Be patient</h1>
      </div>
    </div>
  )
}

export default Discover
