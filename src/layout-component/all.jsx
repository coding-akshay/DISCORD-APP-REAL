import React from 'react'
import search from '/src/assets/layout-images/icons8-search-30.png'
import blogo from '/src/assets/layout-images/blue logo.jpg'
import rlogo from '/src/assets/layout-images/redlogo.jpg'
import glogo from '/src/assets/layout-images/graylogo.jpg'
import grlogo from '/src/assets/layout-images/greenlogo.jpg'
import menu from '/src/assets/layout-images/icons8-menu-vertical-30.png'
import message from '/src/assets/layout-images/icons8-speech-bubble-50.png'
export default function All() {
  return (
    <div className='content'>
            <div className='friends_chat'>
               <div className='searchbox'><input className='search' type="text"  placeholder='Search'  /><img src={search} alt="" /></div>
               <span className='text'>ONLINE-8</span>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={blogo} alt="" /> 
                  <div>
                    <p>Noushida</p> 
                    <p className='text2'>online</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={glogo} alt="" /> 
                  <div>
                    <p>Shibily</p> 
                    <p  className='text2'>online</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={rlogo} alt="" /> 
                  <div>
                    <p>Aparna</p> 
                    <p  className='text2'>online</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={blogo} alt="" /> 
                  <div>
                    <p>Hashim</p> 
                    <p  className='text2'>online</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={grlogo} alt="" /> 
                  <div>
                    <p>Swalih</p> 
                    <p  className='text2'>offline</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={rlogo} alt="" /> 
                  <div>
                    <p>Salah</p> 
                    <p  className='text2'>offline</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={glogo} alt="" /> 
                  <div>
                    <p>Sameeh</p> 
                    <p  className='text2'>offline</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
               <div className='friends_chat_list'>
                   <div className='section1'>
                <img className='img6' src={grlogo} alt="" /> 
                  <div>
                    <p>Akshay</p> 
                    <p  className='text2'>online</p>
                    </div> 
                   </div>
                    <div className='section2'>
                    <div className='circle'><img className='img4' src={message} alt="" /></div>
                    <div className='circle'><img className='img4' src={menu} alt="" /></div>
                    </div>
                    
               </div>
            </div>
            <div className='friends_profile'>
            <h3 className='act'>Active Now</h3>
            <h5 className='text1'>It's quiet for now...</h5>
            <p className='txt'>When a friend starts an activity--like playing <br /> a game or hanging out on voice--we'll show it here!</p>
            </div>
          </div>
  )
}