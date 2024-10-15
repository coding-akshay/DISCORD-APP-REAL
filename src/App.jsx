import React from 'react'
import Sidebar from './layout-component/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Dm from './layout-component/dm';
import RouterComponent from './routes/RouterComponent';

function App() {
  return (
    <Router>
    <div className='main'>
      <Sidebar /> 
      <Dm />
      <RouterComponent />
    </div>
  </Router>
  )
}

export default App
