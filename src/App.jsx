import React from 'react'
import Sidebar from './layout-component/Sidebar'
import Menubar from './layout-component/Menubar'
import Friends from './layout-component/content'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Dm from './layout-component/dm';

function App() {
  return (
    <Router>
    <div className='main'>
      <Sidebar /> 
      <Dm/>
    </div>
  </Router>
  )
}

export default App
