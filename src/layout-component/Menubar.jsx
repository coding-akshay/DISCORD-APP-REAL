import friend from '/src/assets/layout-images/friends.png'
import shop from '/src/assets/layout-images/icons8-shop-48.png'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import mic from '/src/assets/layout-images/icons8-microphone-25.png'
import deafen from '/src/assets/layout-images/icons8-airpods-pro-max-24.png'
import settings from '/src/assets/layout-images/icons8-settings-50.png'
import plus from '/src/assets/layout-images/icons8-plus-24.png'
import blogo from '/src/assets/layout-images/blue logo.jpg'
import rlogo from '/src/assets/layout-images/redlogo.jpg'
import glogo from '/src/assets/layout-images/graylogo.jpg'
import grlogo from '/src/assets/layout-images/greenlogo.jpg'
import logo from '/src/assets/layout-images/icons8-discord-50.png'
function Menubar(){
    return(
        <div className="menubar">
        <div className="top_bar">
            <button className="btn">Find or start a conversation</button>
        </div>
        <ul className="menubar_items">
            <li className="menubar_item"><img className="img2" src={friend} alt="" />Friends</li>
            <li className="menubar_item"><svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#7e8a92"><path d="M10 9.33332C10.7364 9.33332 11.3334 8.73637 11.3334 7.99999C11.3334 7.26361 10.7364 6.66666 10 6.66666C9.26364 6.66666 8.66669 7.26361 8.66669 7.99999C8.66669 8.73637 9.26364 9.33332 10 9.33332Z" fill="#7e8a92"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.66669 2.66666C4.2985 2.66666 4.00002 2.96513 4.00002 3.33332C4.00002 3.70151 4.2985 3.99999 4.66669 3.99999H6.66669C7.03488 3.99999 7.33335 4.29847 7.33335 4.66666C7.33335 5.03485 7.03488 5.33332 6.66669 5.33332L3.66669 5.33332C3.2985 5.33332 3.00002 5.6318 3.00002 5.99999C3.00002 6.36818 3.2985 6.66666 3.66669 6.66666L5.33335 6.66666C5.70154 6.66666 6.00002 6.96513 6.00002 7.33332C6.00002 7.70151 5.70154 7.99999 5.33335 7.99999H4.00002C3.63183 7.99999 3.33335 8.29847 3.33335 8.66666C3.33335 9.03485 3.63183 9.33332 4.00002 9.33332H4.83471C5.42677 11.6336 7.5149 13.3333 10 13.3333C12.9455 13.3333 15.3334 10.9455 15.3334 7.99999C15.3334 5.05447 12.9455 2.66666 10 2.66666H4.66669ZM10 10.6667C11.4728 10.6667 12.6667 9.47275 12.6667 7.99999C12.6667 6.52723 11.4728 5.33332 10 5.33332C8.52726 5.33332 7.33335 6.52723 7.33335 7.99999C7.33335 9.47275 8.52726 10.6667 10 10.6667Z" fill="#7e8a92"></path><path d="M1.66669 6.66666C2.03488 6.66666 2.33335 6.36818 2.33335 5.99999C2.33335 5.6318 2.03488 5.33332 1.66669 5.33332H1.33335C0.965164 5.33332 0.666687 5.6318 0.666687 5.99999C0.666687 6.36818 0.965164 6.66666 1.33335 6.66666H1.66669Z" fill="#7e8a92"></path><defs><linearGradient id="paint0_linear_6413_12612" x1="0.666992" y1="0.127441" x2="15.3271" y2="0.127441" gradientUnits="userSpaceOnUse"><stop stop-color="var(--premium-tier-2-purple-for-gradients)"></stop><stop offset="0.502368" stop-color="var(--premium-tier-2-purple-for-gradients-2)"></stop><stop offset="1" stop-color="var(--premium-tier-2-pink-for-gradients)"></stop></linearGradient></defs></svg>Nitro</li>
            <li className="menubar_item"><img className="img3" src={shop} alt="" />Shop</li>
        </ul>
        <div className="message">
            <li className='message_item1'>DIRECT  MESSAGES <img className='img5' src={plus} alt="" /></li> 
            <li className='message_item2'><div className='circle'><img className='img6' src={blogo} alt="" /></div>Noushida</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={rlogo} alt="" /></div>Aparna</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={glogo} alt="" /></div>Shibly</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={grlogo} alt="" /></div>Hashim</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={blogo} alt="" /></div>Swalih</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={rlogo} alt="" /></div>Asif</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={grlogo} alt="" /></div>Akshay</li>
            <li className='message_item2'><div className='circle'><img className='img6' src={blogo} alt="" /></div>Sameeh</li>
        </div>
        <div className="bottom_bar">
            <li className='circle'><img className='img3' src={logo} alt="" /></li>
            <li>Astrobyte <br /> online
             </li>
            <li><img className='img4' src={mic} alt="" /></li>
            <li><img  className='img4' src={deafen} alt="" /></li>
           <Link to={'/settings'}> <li><img className='img4' src={settings} alt="" /></li></Link>
        </div>
        </div>
    )
}
export default Menubar