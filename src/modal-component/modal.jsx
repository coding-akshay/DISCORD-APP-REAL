import { useState, useEffect, useRef } from 'react'
import './modal.css'
import DM from './Components/DM'
import Inbox from './Components/Inbox';
import Server from './Components/Server';
import Downloadapp from './Components/Download-app';
import ProfileBar from './Components/ProfileBar';


function App() {
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
    <div className='btn-main'>
      <button className="DM-Button" onClick={() => setOpenDM(true)}>
        DM
      </button>
      {openDM && <div ref={dmRef}><DM /></div>}

      <button className="Inbox" onClick={() => setOpenInbox(true)}>
        Inbox
      </button>
      {openInbox && <div ref={inboxRef}><Inbox /></div>}

      <button className='Add-To-Server' onClick={()=> setOpenServer(true)}>
        Add a Server
      </button>
      {openServer && <div ref={serverref}><Server /></div>}

      <button className='DownloadApp' onClick={()=> setOpenDownloadApp(true)}>
        Download App
      </button>
      { openDownloadApp && <div ref={downloadappref}><Downloadapp/></div>}

      <button className='ProfileBar' onClick={()=> setOpenProfileBar(true)}>
        Profile Bar
      </button>
      { openProfileBar && <div ref={profilebarref}><ProfileBar/></div>}

    </div>
    

      
    
  );
}

export default App;
