


import React from 'react';

import severboostermodalimg from '/src/assets/settings-images/severboostermodalimg.png';

import severboostermodalimg1 from '/src/assets/settings-images/severboostermodalimg1.png';

import serverbosterimg3 from '/src/assets/settings-images/serverbosterimg3.png';



function ServerBooxModal({ Ismodalopen, togglemodal }) {
  return (
    <div>
    
      {Ismodalopen && (
        <div className="modal">
          <div className="modal-content">
           <div className="modal-content_first">
           
            <img src={severboostermodalimg} alt=""onClick={togglemodal} />
            <img src={severboostermodalimg1} alt="" id='severboostermodalimg1'/>
           <img src={serverbosterimg3} alt=""   id='severboostermodalimg2'/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServerBooxModal;
