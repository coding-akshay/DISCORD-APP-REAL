import React from 'react';
import './Modal.css'; // Ensure you style the modal (we'll discuss the styles later)
import close from '/src/assets/shop-images/close.png'

const Modal = ({ show, onClose, title, children }) => {
  if (!show) {
    return null; // If modal is not open, don't render anything
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <div className="modal-header">
        <button className="modal-close-btn" onClick={onClose}><img src={close} alt="" /></button>
          
          
        </div>

        <div className="modal-body">
        <h1>SELECT PAYMENT TYPE</h1>
        <div className='card-pal'>
        <div className='payment-card'>
          <img src="" alt="" />
          <h4>card</h4>
        </div>
          <div className='pay-pal'>
            <h4>paypal</h4>
          </div>
        </div>
        <div className='autofill'>
           <p>Autofill from Browser (N/A)</p>

        </div>
        </div>

        <div className="modal-footer">
          <p onClick={onClose}>Back</p>
          <span>Secure</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
