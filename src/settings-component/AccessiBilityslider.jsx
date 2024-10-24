
import React, { useState } from 'react';

function VoiceSlider() {
  // Define state for the slider value
  const [value, setValue] = useState(50); // default value set to 50%

  // Function to handle slider value change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={handleChange}
      />
      <div className="labels">
        {[...Array(11)].map((_, i) => (
          <span key={i}>{i * 10}%</span>
        ))}
      </div>
    </div>
  );
}

export default VoiceSlider;

