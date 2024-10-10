import React from 'react'
import Sidebar from './layout-component/Sidebar'
import Menubar from './layout-component/Menubar'
import Friends from './layout-component/content'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 


function App() {
  return (
    <Router>
    <div className='main'>
      <Sidebar /> 
      <Menubar />
      <Friends/>  
    </div>
  </Router>
  )
}

export default App
