import React from 'react'



function Unread() {
  return (
    <div >
        <div class="Unread-Container">
          <img className='Unreadimage' src="src/assets/Unread.jpeg" alt="" />
          <span className='Unread-text' >You're all caught up!</span>
          <div className='Unread-text-2'> <span>PROTIP:</span>Open the Inbox by pressing CMD+l and mark your top message as read with <br />CMD+Shift+E</div>
        </div>   
    </div>
  )
}

export default Unread
