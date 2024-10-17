import React,{useState} from 'react'
import Close from '/src/assets/modal-images/Close.png'
import windows from '/src/assets/modal-images/windows.svg'
import linux from '/src/assets/modal-images/linux.svg'
import apple from '/src/assets/modal-images/apple.svg'
import android from '/src/assets/modal-images/android.svg'

function Downloadapp() {
    // State to track if the component is visible
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle the close button click
  const handleClose = () => {
    setIsVisible(false); // Hide the component when clicked
  };

  // If the component is not visible, return null to not render anything
  if (!isVisible) {
    return null;
  }
  return (
    <div className='DA-body'>
      <div className='DA-container'>
        <div className="DA-container-1">
            <div className='DA-container-1-1'>
                <button  onClick={handleClose} ><img src={Close} alt="Close" /></button>
            </div>
            <div className='DA-container-1-2'>
                <h2>Get Discord at Home</h2>
            </div>
            <div className='DA-container-1-3'>
                <div className='Three-OS-Container'>
                    <div className='Three-OS'>
                        <div className='macOS-Icons'>
                            <h3 className='span-os'>mac</h3>
                            <h1 className='span-mac'>OS</h1>

                        </div>
                        <span>MacOS</span>
                        <button>Download</button>
                    </div>
                    <div className='Three-OS'>
                        <div className='OS-Icons'>
                            <img src={windows} alt="" />
                        </div>
                        
                        <span>Windows</span>
                        <button>Download</button>
                    </div>
                    <div className='Three-OS'>
                        <div className='OS-Icons'>
                            <img src={linux} alt="" />
                        </div>
                        <span>linux</span>
                        <div className='linux-buttons'>
                            <div className='linux-buttons1'>Deb</div>
                            <div className='linux-buttons1'>Tar</div>
                        </div>          
                    </div>
                </div>

            </div>
 
        </div>
        <div className='DA-container-2'>
                <span>Or on the go</span>
            </div>
        <div className="DA-container-3">
            <div className="DA-container-3-1">
                <div className='Two-OS'>
                    <div className='Two-OS-icon'>
                        <img src={apple} alt="" />
                    </div>
                    
                    <span>Windows</span>
                    <button>Download</button>
                </div>
                <div className='Two-OS'>
                    <div className='Two-OS-icon'>
                        <img src={android} alt="" />
                    </div>
                    
                    <span>Windows</span>
                    <button>Download</button>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Downloadapp
