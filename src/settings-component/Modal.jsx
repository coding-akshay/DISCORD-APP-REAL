import React from 'react'
import { useState } from 'react';

const Modal = ({onclose}) => {
    const [Cards, setCards] = useState([
        { item: 'src/assets/Settings-images/Paypal-removebg-preview.png' },
        { item: 'src/assets/Settings-images/download-removebg-preview.png' },
        { item: 'src/assets/Settings-images/png-clipart-clay-os-6-a-macos-icon-steam-steam-logo-thumbnail-removebg-preview.png' },
        { item: 'src/assets/Settings-images/png-transparent-tiktok-social-media-logos-brands-icon-thumbnail-removebg-preview.png' },
        { item: 'src/assets/Settings-images/images-removebg-preview (1).png' },
        { item: 'src/assets/Settings-images/images-removebg-preview.png' },
        { item: 'src/assets/Settings-images/download__1_-removebg-preview.png' },
        { item: 'src/assets/Settings-images/images (1).png' },
        { item: 'src/assets/Settings-images/download__2_-removebg-preview.png' },
        { item: 'src/assets/Settings-images/Paypal-removebg-preview.png' },
        { item: 'src/assets/download-removebg-preview.png' },
        { item: 'src/assets/png-clipart-clay-os-6-a-macos-icon-steam-steam-logo-thumbnail-removebg-preview.png' },
        { item: 'src/assets/download__3_-removebg-preview.png' }
      ]);
  return (
    <>
    <div className="modal-back-cover">
      <div className="Modal-main">
        {/* modal */}
        <div className="modal-inner-first">
            <div className="modal-inner-first-heder">
                <h3>Connections</h3>
            </div>
            <button className="modal-inner-first-quit" onClick={onclose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>
            <div className="modal-icons-page">
                {Cards.map((card, index) => (
                <div className="modal-icons-page-first">
                <img key={index} src={card.item} alt={`Card ${index}`} className="connection-card-img" />
                </div>
              ))}
            </div>
      </div>
    </div>
    </>
  )
}

export default Modal
