import React from 'react'
import Foryouimage from '/src/assets/modal-images/Foryou-image.svg'

const ForYou = () => {
  return (
    <div>
      <div className='foryou-box'>
        <img className='foryou-Image' src={Foryouimage} alt="" />
        <span className='foryou-text' >Nothing here Yet</span>
        <span className='foryou-text2'>Come back for notifications on events, streams, and more.</span>
        
      </div>

    </div>
  )
}

export default ForYou
