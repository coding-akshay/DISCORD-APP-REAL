import React from 'react'
import Profile from '/src/assets/ProfileStatus.png'
import Edit from '/src/assets/edit-Icon.svg'
import Online from '/src/assets/Online.svg'
import Arrow from '/src/assets/Rigth-Arrow.svg'
import SwitchAccount from '/src/assets/profile-boy-icon.svg'

function ProfileBar() {
  return (
    <div className='Profile-bg'>
      <div className="Profile-Container">
        <div className='Profile-Top'>
            <img src={Profile} alt="" />
        </div>

        <div className="Profile-Name">
            <h1>Hashim Poroli</h1>
            <span>hashimporoli</span>
        </div>
        <div className="Profile-Edit-Container">
            <div className="Profile-Edit-Box">
                <div className='Profile-Edit-Innerox'>
                    <div className='Edit-Profile'>
                        <img src={Edit} alt="" />
                        <span>Edit Profile</span>
                    </div>
                    <div className='Line-div'>

                    </div>
                    <div className='Online-div'>
                        <img className='Online-svg' src={Online} alt="" />
                        <span>Online</span>
                        <img className='Online-Arrow' src={Arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="Switch-Account">
            <div className='Swich-Account-div'>
                <div className="Swich-Account-innerdiv">
                    <img className='Swich-Account-svg' src={SwitchAccount} alt="" />
                    <span>Switch Accounts</span>
                    <img className='Switch-Account-Arrow' src={Arrow} alt="" />
                </div>
            </div>
        </div>


      </div>
    </div>
  )
}

export default ProfileBar
