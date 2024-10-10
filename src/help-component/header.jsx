import React from 'react'
import './header.css'
import discordLogo from '/src/assets/help-images/discordLogo.svg'
import searchIcon from '/src/assets/help-images/search-icon.png'
// import InModal from './inModal'

function Header() {
  
  return (
    <div>

      <header className='helpHead'>
        <img className='discordLogo' src={discordLogo} alt="" />
        <div className='navLinks'>
          <a href="">Feedback</a>
          <a href="">English (US)</a>
          <a href=""> Submit a request</a>
          <a href=""> Sign in</a>
        </div>
      </header>

      <section className="bgImgDiv">
          <h1 className='help'>Help Center</h1>
          <div className='searchDiv'>
            <img className='searchicon' src={searchIcon} alt="" />
            <input className="input" type="text" list="programmingLanguages" placeholder="Search" />
            {/* <InModal/> */}
            {/* <datalist id="programmingLanguages">
                <option value="Getting Started">Discord-Discord Basics - Getting Started</option>
                <option value="Getting Started">Discord-Discord Basics - Getting Started</option>
                <option value="Getting Started">Discord-Discord Basics - Getting Started</option>
            </datalist> */}
          </div>
      </section>
      
    </div>

  )
}

export default Header
