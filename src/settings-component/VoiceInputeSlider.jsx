
// import React from 'react';
import React, { useState } from "react";
import "./settings_index.css";

function VoiceInputeSlider() {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input_slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="input_voice_slider"
        onChange={handleChange}
      />
    </div>
  );
}

export default  VoiceInputeSlider
