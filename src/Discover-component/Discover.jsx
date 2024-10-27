import React from 'react'
import Sidebar from '../layout-component/Sidebar'
import '../Discover-component/discover.css'
import ServerOptions from './ServerOptions'
import DiscoverNavbar from './Discover-navbar'
import ServerCards from './Official-cards'




function Discover() {

  const cardDetails =[
    {title:"dargonaballz"},
    {title:"arcade"},
    {title:"messiah"}
  ]
  
  
  return (
    <div className='discover'>
      <Sidebar />
      <ServerOptions/>
      <div className='game-servers'>
        <DiscoverNavbar/>
        <div className="blue">
          
        </div>
         <img src="src\assets\Discover-images\communtity.png" alt="" className='community-pic'/>
         <div className="server-cards">
          {cardDetails.map((card,index)=>{
            <ServerCards title={card.title} />
            console.log(card.title);
            
            
          })}
          
         </div>
        <h1>its loading..... Be patient</h1>
      </div>
    </div>
  )
}

export default Discover
