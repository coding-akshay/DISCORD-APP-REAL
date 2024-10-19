import React, { useState } from 'react';
import Modal from './Modal';

const Conection = () => {
  const [Cards, setCards] = useState([
    { item: 'src/assets/Settings-images/Paypal-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/download-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/png-clipart-clay-os-6-a-macos-icon-steam-steam-logo-thumbnail-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/images-removebg-preview (1).png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/images-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/download__1_-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/images (1).png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/download__2_-removebg-preview.png' },
    { item: 'DISCORD-APP-REAL/src/assets/Settings-images/download__3_-removebg-preview.png' }
  ]);
    const[Changemodal,setChangemodal]=useState(false)
    // function onclose(){
    //     setChangemodal(false)
    // }
  return (
    <div>
      <div className="connection-header">
        <h3>Connections</h3>
      </div>
      <div className="add-account-to-your-profile">
        <h4>Add account your profile</h4>
        <p>
          This information will not be shared outside without your permission, and is used in accordance with Discord's <br />
          <span>Privacy Policy</span>
        </p>
        <div className="connection-cards">
          <div className="connection-cards-maping">
            <div className="connection-cards-maping-first">
              {Cards.map((card, index) => (
                <img key={index} src={card.item} alt={`Card ${index}`} className="connection-card-img" />
              ))}
              <button onClick={() => setChangemodal(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-step-forward"><line x1="6" x2="6" y1="4" y2="20"/><polygon points="10,4 20,12 10,20"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
     {Changemodal&&<Modal onclose={() => setChangemodal(false)}/>} 
     <div className="esc-back-btn">
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#b5bac1" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path></svg>
      <p>Esc</p>
      </div>
    </div>
  );
};

export default Conection;
