import React from 'react'
import './FamilyCenter.css'


const FamilyCenterBodyTwo = () => {
  return (
    <>
<div class="discord-info">
  <div class="content">
    <h1>Download the Discord app to connect with your teens!</h1>
    <p>
      In order to connect with your teen, you'll need to download the Discord app on your phone. You can then complete setup by going to Family Center in user settings. After connecting, you will see high-level information about your teen's activity on Discord.
    </p>
    <ul>
      <li><strong><span>1</span> Ask your teen for their QR code</strong><br/>
        <p>Your teen can find this by going to Family Center in user settings and clicking My Family.</p> 
      </li>
      <li><strong><span>2</span> Scan the QR code with your Discord app</strong><br/>
        <p>This will send a connection request to your teen, like magic!</p>
      </li>
      <li><strong><span>3</span> Have your teen accept the connection request</strong><br/>
        <p>Once they give consent for you to view their activity data, you're good to go.</p>
      </li>
    </ul>
  </div>
  <div class="image-container">
    <img src="path-to-your-image.png" alt="Discord Image" />
  </div>
</div>

    
    </>
  )
}

export default FamilyCenterBodyTwo
