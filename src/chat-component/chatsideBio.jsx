import React from 'react'
import { useState } from 'react'
import './chatsideBio.css'
import discord from '/src/assets/help-images/discordPro.png'
import checked from '/src/assets/help-images/profileChecked.png'
import more from '/src/assets/help-images/profileMore.png'
import greater from '/src/assets/help-images/greaterthan_icon.png'
import astrobyte from '/src/assets/help-images/astrobyteLogo.jpg'

function SideBio() {
    const [showServer, setShowServer] = useState(false);
    const [showFriends, setShowFriends] = useState(false);


    return (
        <div className='bioSection'>
            <div className='firstDiv'>
                <div className='firstdivImgs'>
                    <div className='checked'><img className='checkImg' src={checked} alt="" /></div>
                    <div className='checked'><img className='moreImg' src={more} alt="" /></div>
                </div>
                <div className='bioProfile-div'>
                <img className='bioprofile' src={discord} alt="" />
                <span className='online'></span>
                </div>
            </div>
            <div className='secDiv'>
                <div className='secContentDiv'>
                    <div className='nameIdDiv'>
                        <h2>Aparna</h2>
                        <h3>aparna_136</h3>
                    </div>
                    <div className='memberDiv'>
                        <p>Member Since</p>
                        <h4>Jul 10,2024</h4>
                    </div>
                    <div className="dropdown-container">
                        {/* Mutual Server Section */}
                        <div className="dropdown-item, dropdown-item1">
                            <div className="dropdown-header" onClick={() => setShowServer(!showServer)}>
                                1 Mutual Server
                                <img className='greater' src={greater} alt="" />
                                </div>
                            {showServer && (
                                <div className="dropdown-content">
                                    <div className='dropdiv'><img className='dropAstro' src={astrobyte} alt="" /> <p className='astroname'>AstroHub</p></div>
                                </div>
                            )}
                        </div>

                        {/* Mutual Friends Section */}
                        <div className="dropdown-item">
                            <div className="dropdown-header" onClick={() => setShowFriends(!showFriends)}>
                                3 Mutual Friends
                                <img className='greater' src={greater} alt="" />
                            </div>
                            {showFriends && (
                                <div className="dropdown-content">
                                    <ul className='ulSec'>
                                        <li className='li-List'>
                                            <div className='profilePht-div1'><img className='profile-pht1' src={discord} alt="" /><span className='online1'></span></div>
                                            <h4>noushida_p</h4>
                                        </li>
                                        <li className='li-List'>
                                            <div className='profilePht-div2'><img className='profile-pht2' src={discord} alt="" /><span className='online2'></span></div>
                                            <h4>Sameeh</h4>
                                        </li>
                                        <li className='li-List'>
                                            <div className='profilePht-div3'><img className='profile-pht3' src={discord} alt="" /><span className='online3'></span></div>
                                            <h4>Hasim Paroli</h4>
                                        </li>   
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='thirdDiv'>
                <h4>View Full Profile</h4>
            </div>
        </div>


    )
}

export default SideBio