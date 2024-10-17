import React from 'react'

function Mentions() {
  return (
    <div>
      <div className="Mention-Container">
        {/* <h1>hloo</h1> */}
        <img className='Mentionimage' src="src/assets/Mention-image.jpg" alt="" />
        <span className='Mention-text'>You made it through everying!</span>
        <div className='Mention-text-2'> <span>PROTIP:</span>Whenever someone mention you it will be saved here for 7 days.</div>

      </div>
    </div>
  )
}

export default Mentions
