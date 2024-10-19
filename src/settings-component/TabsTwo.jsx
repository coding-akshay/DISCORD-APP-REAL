import React from 'react'

const Tabstwo = () => {
  return (
    <div className='tabs-two-items'>
        <div className='My-account'>
            <h3>My Account</h3>
        </div>
      <div className='tabs-first-card'>
        <div className='crad-inner-first'>
        </div>
        <div className='crad-inner-second'>
       <img src="src/assets/Settings-images/discord-logo-7A1EC3216C-seeklogo.com.png" alt="discord" />
        <h2>sameeh</h2>
        </div>
        <div className='edit-profile'>
         <button>Edit User Profile</button>
        </div>
        <div className="card-inner-third">
            <div className="card-inner-third-item  one">
                <div className= 'third-inner-one'>
                    <label htmlFor="displayname">DISPLAY NAME</label>
                    <span>sameeh</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
            <div className="card-inner-third-item  two">
            <div className= 'third-inner-one'>
                    <label htmlFor="displayname">USER NAME</label>
                    <span>sameeh_114_14990</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
            <div className="card-inner-third-item  three">
            <div className= 'third-inner-one'>
                    <label htmlFor="displayname">EMAIL</label>
                    <span>********@gmail.com</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
            <div className="card-inner-third-item  four">
            <div className= 'third-inner-one'>
                    <label htmlFor="displayname">PHONE NUMBER</label>
                    <span>********1151</span>
                     </div>
                <div className= 'third-inner-two'> Edit</div>  
            </div>
        </div>
      </div>

      <div className="password-authentication">
        <h2>Password And Authentication</h2>
        <div>
        <button>Change Password</button>
        </div>
        <h4>AUTHENTICATOR APP</h4>
        <p>
        Protect your Discord account with an extra layer of security. Once configured, you'll be required
        to enter your password and complete one additional step in order to sign in.
        </p>
        <div>
        <button>Enable Authenticator App </button>
        </div>
        <h4>SECURITY KEYS</h4>
        <p>
        Add an additional layer of protection to your account With a security Key.
        </p>
        <h4>ACCOUNT REMOVAL</h4>
        <p>
        Disabling your account means you can recover it at any time after taking this action.
        </p>
      <div className="disable-account">
        <div className='disable-account-first-butt'>
        <button >Disable Account</button>
        </div>
        <button>Delete Account</button>
      </div>
      </div>
      <div className="ship-model-image">
        <img src="src/assets/Settings-images/PHOTO-2024-09-01-13-37-28-removebg-preview.png" alt="" />
      </div>
      <div className="esc-back-btn">
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
      <p>Esc</p>
      </div>
    </div>
  )
}

export default Tabstwo
