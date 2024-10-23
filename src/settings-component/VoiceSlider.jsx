import React from 'react'

function VoiceSlider() {
  return (
    <div className="VoiceSlider-container">
      <input
        type="range"
        min="0"
        max="100"
       
        className="slider"
      />
    
    </div>
  );
}

export default VoiceSlider
