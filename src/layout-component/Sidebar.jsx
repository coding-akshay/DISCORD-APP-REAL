import { Link } from "react-router-dom";
import logo from "/src/assets/layout-images/icons8-discord-50.png";
import serverlogo from "/src/assets/layout-images/serverlogo.jpg";
// import add from '/src/assets/icons8-add-24.png'
// import explor from '/src/assets/icons8-explore-24.png'
import { useState, useEffect, useRef } from 'react'
import '/src/modal-component/modal.css'
import Server from "../modal-component/Server";
import Downloadapp from "../modal-component/Download-app";

function Sidebar() {
  const [openDM, setOpenDM] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);
  const [openServer, setOpenServer] = useState(false);
  const [openDownloadApp, setOpenDownloadApp] = useState(false);
  const [openProfileBar, setOpenProfileBar] = useState(false);

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
    <div className="sidebar">
      <ul className="sidebar_items">
        <Link to={'/'}>
        <li className="sidebar_item1">
          <img className="img" src={logo} alt="" />
        </li>
      </Link>
        <li className="sidebar_item2">
          <img className="img1" src={serverlogo} alt=""  />
        </li>
        <li className="sidebar_item3" onClick={()=> setOpenServer(true)}></li>
        {openServer && <div ref={serverref}><Server /></div>}
        <Link to={'/discover'}>
          <li className="sidebar_item4"></li>
        </Link>
        <li className="sidebar_item5">____</li>
        <li className="sidebar_item6" onClick={()=> setOpenDownloadApp(true)}></li>
        { openDownloadApp && <div ref={downloadappref}><Downloadapp/></div>}
      </ul>
    </div>
  );
}

export default Sidebar;
