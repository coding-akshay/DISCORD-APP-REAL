import React from 'react'

function Chatbox_Inpusecond_component() {
  return (
    <div>
       <input
               type="range"
               min="0"
               max="100"
              //  value={value}
              // onChange={handleChange}
              className="slider"
              id='sliderinput_second'
               />
    </div>
  )
}

export default Chatbox_Inpusecond_component
