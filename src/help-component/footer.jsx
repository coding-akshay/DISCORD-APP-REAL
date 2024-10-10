import React from 'react'
import './footer.css'
import browser from '/src/assets/help-images/icon-browsers.svg'
import android from '/src/assets/help-images/icon-android.svg'
import ios from '/src/assets/help-images/icon-ios.svg'
import windows from '/src/assets/help-images/icon-windows.svg'
import osx from '/src/assets/help-images/icon-osx.svg'
import discordfooter from '/src/assets/help-images/logo_discord_footer.svg'

function Footer() {
  return (
    <footer>
      <div className='footerOne'>
        <button className='footerbtn'>LEARN MORE</button>
        <div className='apps'>
          <img className='browserImg appsImg' src={browser} alt="" />
          <img className='androidImg appsImg' src={android} alt="" />
          <img className='iosImg appsImg' src={ios} alt="" />
          <img className='windowsImg appsImg' src={windows} alt="" />
          <img className='osxImg appsImg' src={osx} alt="" />
        </div>
      </div>

      <div className='footerSec'>
        <div className='footerlogo'>
          <img src={discordfooter} alt="" />
        </div>
        <div className='footerLink1'>
          <a href="">Download</a>
          <a href="">Help & Support</a>
          <a href="">Feedback</a>
          <a href="">Status</a>
        </div>
        <div className='footerLink2'>
          <a href="">Company</a>
          <a href="">Jobs- <span className='hire'>We're hiring</span> </a>
          <a href="">Blog</a>
          <a href="">Terms <span className='terms'>&</span> Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer