import React from 'react'
import { useState } from 'react'
import Arrow from'/src/assets/Rigth-Arrow.svg'

function Server() {
    const[List, setList]=useState([
        {Name:'Create My Own'},
        {Name:'Gaming'},
        {Name:'School Club'},
        {Name:'Study Group'},
        {Name:'Friends'},
        {Name:'Artist & Creators'},
        {Name:'Local community'},

    ])

  return (
    <div className='Server-Box'> 
      <div className='Server-Container'>
        <div className='Server-Top'>

            <h1>Create Your Server</h1>
            <span>Your server is where you and your friend hang out. Make <br />yours and start Talking.</span>
        </div>

        <div className="Server-body">
            {List.map((val,intex)=>{
                return(
                    <li className='Server-Body-List' key={intex}>{val.Name}<img src={Arrow} alt="" /></li>
                )
            })}
        </div>
        <div className="Server-Footer">
            <h2>Have an invite already?</h2>
            <button>Join a server</button>
        </div>

      </div>
    </div>
  )
}

export default Server
