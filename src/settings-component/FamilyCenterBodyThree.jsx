import React from 'react'
import './FamilyCenter.css';

const FamilyCenterBodyThree = () => {
  return (
 <>
   <div class="settings-container">
    <div class="setting">
      <div class="setting-text">
        <h2>Enable Family Center tab</h2>
        <p>
          This will show you the Family Center tab. Here you can pair with your family members
          to create a safe, yet privacy conscious environment for your family!
        </p>
      </div>
      <div class="toggle-switch">
        <input type="checkbox" id="toggle1" class="checkbox" />
        <label for="toggle1" class="label">
          <span class="ball"></span>
        </label>
      </div>
    </div>

    <div class="setting">
      <div class="setting-text">
        <h2>Receive Activity Summary emails</h2>
        <p>
          You will receive a weekly email summarizing your teen(s)' recent activity.
          We recommend keeping this setting on.
        </p>
      </div>
      <div class="toggle-switch">
        <input type="checkbox" id="toggle2" class="checkbox" checked />
        <label for="toggle2" class="label">
          <span class="ball"></span>
        </label>
      </div>
    </div>
  </div>
 </>
  )
}

export default FamilyCenterBodyThree
