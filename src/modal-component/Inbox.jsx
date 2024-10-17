import React from 'react'
import ForYou from './For-You'
import Unread from './Unread'
import Mentions from './Mentions'
import {useState} from 'react'


function Inbox() {

  const [activeTab, setActiveTab]=useState('foryou');

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className='Inbox-background'>
      <div className='Inbox-container'>
        <div className='Inbox-top'>
          <div className="Inbox-top-1">
            <svg className='Inbox-img' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
            <span>Inbox</span>
          </div>
          <div className="Inbox-top-2">
            <div className="count-box">
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#ffff" d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" class=""></path><path fill="#ffff" d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z" class=""></path></svg>
              <div className="count-round">
                <span>0</span>
              </div>
            </div>    

          </div>
        </div>
        <div className="list-container">

            <div onClick={() => toggleTab('foryou')}>
              <li >For You</li>
            </div>

            <div onClick={() => toggleTab('unread')}>
              <li>Unreads</li>
            </div>
            <div onClick={() => toggleTab('mentions')}>
              <li>Mentions</li>
            </div>
        </div>

        {activeTab === 'foryou' && <ForYou />}
        {activeTab === 'unread' && <Unread />}
        {activeTab === 'mentions' && <Mentions />}
        
      </div>
    </div>
  )
}

export default Inbox
