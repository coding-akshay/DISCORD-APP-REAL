import React from 'react'
import { useState } from 'react'


function DM() {
    const[List, setList]=useState([
        {Name:'Asifpashraf'},
        {Name:'Sameeh'},
        {Name:'Salah'},
        {Name:'Akshay'},
        {Name:'Swalih'},
        {Name:'Aparna'},
        {Name:'Noushida'},
        {Name:'Shibili'},
        {Name:'Hashim'},

    ])

  return (
    <div className='DM-Background'>
        <div className="DM-Container">
            <div className="DM-top">
                <h2>Select Friends</h2>
                <h5>You can add 9 more friends.</h5>
                <input className='inputBox' type="text" placeholder='Type the username of a friend'/>
            </div>

            <div className="DM-list-box">
                { List.map((val,intex) =>{
                return(
                        <li className='DM-name-list' key={intex}>{val.Name}</li>
                    )
                })}
            </div>

            <div className="DM-selectfriend-footer">
                <button className='CDM'>Create DM</button>
            </div>
            
        </div>
        
    </div>
  )
}

export default DM
