import React from 'react'
import Switch from './Switch'

const Clips = () => {
  return (
    <div>
      <div className="clips-beta">
        <div className="clips-beta-heading">
        <h2>Clips</h2>
        <div className="beta">
            <span>BETA</span>
        </div>
        </div>
      </div>
      
      <div className="allo-my-voice">
        <div className="allo-my-voice-text">
        <span>Allow My Voice To Be Recorded In a Clip</span>
        </div>
        <div className="allo-my-voice-toggle">
            <Switch/>
        </div>
      </div>
      <div className="allo-my-voice-under-text">
        <span>By turning on this setting  , your voice may be included when some onne in the same voice channel uses  clips</span>
      </div>
      <div className="esc-back-btn">
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
      <p>Esc</p>
      </div>
    </div>
  )
}

export default Clips
