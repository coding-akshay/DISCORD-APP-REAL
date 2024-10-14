import React from 'react'
import Menubar from './Menubar'
import '../App.css'
import Friends from './content'

function Home() {
  return (
    <div className='homepage'>
      <Menubar/>
      <Friends/>
    </div>
  )
}

export default Home
