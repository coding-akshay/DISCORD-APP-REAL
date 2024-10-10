import React from 'react'
import block from '/src/assets/layout-images/blocked.png'
export default function Blocked() {
  return (
    <div className='content'>
        <div className='friends_chat_img'>
           <img src={block} className='img7' alt="" />
        </div>
        <div className='friends_profile'>
            <h3 className='act'>Active Now</h3>
            <h5 className='text1'>It's quiet for now...</h5>
            <p className='txt'>When a friend starts an activity--like playing <br /> a game or hanging out on voice--we'll show it here!</p>
            </div>
    </div>
  )
}
