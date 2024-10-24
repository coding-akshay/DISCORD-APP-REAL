import friend from '/src/assets/layout-images/friends.png'
import message from '/src/assets/layout-images/icons8-speech-bubble-50.png'
import inbox from '/src/assets/layout-images/icons8-inbox-48.png'
import help from '/src/assets/layout-images/icons8-help-30.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import Inbox from '../modal-component/Inbox';
import Gm from '../modal-component/Gm';
import '/src/modal-component/modal.css'
import Online from './online';
import All from './all';
import Blocked from './blocked';
import Pending from './pending';
// import Modal from '../modal-component/modal';
// import Gm from '../modal-component/Gm';
function Friends() {
  const [openDM, setOpenDM] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);
  const [openServer, setOpenServer] = useState(false);
  const [openDownloadApp, setOpenDownloadApp] = useState(false);
  const [openProfileBar, setOpenProfileBar] = useState(false);

  const [activeComponent, setActiveComponent] = useState('online');
  const handleclick = (component) => {
    setActiveComponent(component);
  };
  // Refs to track the DM and Inbox modals
  const dmRef = useRef(null);
  const inboxRef = useRef(null);
  const serverref = useRef(null);
  const downloadappref = useRef(null);
  const profilebarref = useRef(null);

  // Function to handle clicks outside the modal
  useEffect(() => {
    function handleClickOutside(event) {
      // Close DM if the click is outside DM modal
      if (openDM && dmRef.current && !dmRef.current.contains(event.target)) {
        setOpenDM(false);
      }
      // Close Inbox if the click is outside Inbox modal
      if (openInbox && inboxRef.current && !inboxRef.current.contains(event.target)) {
        setOpenInbox(false);
      }
      if (openServer && serverref.current && !serverref.current.contains(event.target) ) {
        setOpenServer(false);
      }
      if ( openDownloadApp && downloadappref.current && !downloadappref.current.contains(event.target) ) {
        setOpenDownloadApp(false);
      }
      if ( openProfileBar && profilebarref.current && !profilebarref.current.contains(event.target) ) {
        setOpenProfileBar(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDM, openInbox, openServer, openDownloadApp, openProfileBar]);



  return (
    <div className="friends">
      <div className="navbar">
        <div className="navbar_left">
          <li className="navbar_left_item1"><img className="img2" src={friend} alt="" />Friends</li>
         <li onClick={ () => handleclick('online')} className="navbar_left_item2">Online</li>
           <li onClick={ () => handleclick('all')} className="navbar_left_item2">All</li>
         <li onClick={ () => handleclick('pending')} className="navbar_left_item2">Pending</li>
          <li onClick={ () => handleclick('blocked')} className="navbar_left_item2">Blocked</li>
          <li className='navbar_left_item3'>Add friend</li>
          <li></li>
        </div>
        <div className="navbar_right">
          <li className='navbar_right_item'><img className="img3" src={message} alt=""  onClick={() => setOpenDM(true)} /></li>
          {openDM && <div ref={dmRef}><Gm /></div>}
          <li><img className="img3" src={inbox} alt="" onClick={() => setOpenInbox(true)} /></li>
          {openInbox && <div ref={inboxRef}><Inbox /></div>}
        <Link to={'/help'}><li><img className="img3" src={help} alt="" /></li></Link> 
        </div>
      </div> 
       {
        activeComponent=== 'online' && <Online />
       } 
       {
        activeComponent=== 'all' && <All />
       } 
       {
        activeComponent=== 'pending' && <Pending />
       } 
       {
        activeComponent=== 'blocked' && <Blocked />
       } 
       
    </div>
  )
}
export default Friends