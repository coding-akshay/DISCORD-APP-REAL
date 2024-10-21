import React from 'react'
import './chat.css'
import ChatHeader from './chatHeader'
import ChatContent from './chatContent'
import SideBio from './chatsideBio'


function Chat() {
  return (
    <div className='main-container'>

      <div className='plain-div'></div>

      <div className='chatSection'>
        <ChatHeader />
        <div className='container'>
          <ChatContent />
          <SideBio />
        </div>
      </div>

    </div>

  )
}

export default Chat
