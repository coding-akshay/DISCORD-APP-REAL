import React from 'react'
import Sidebar from './layout-component/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Discover from './Discover-component/Discover';
import Home from './layout-component/Home';

function App() {
  return (
    <Router>
    <div className='main'>
      <Sidebar />
      <Home/>
      
    </div>
  </Router>
  )
}

export default App
