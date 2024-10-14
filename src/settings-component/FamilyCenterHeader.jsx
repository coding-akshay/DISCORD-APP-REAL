import React from 'react';
import './FamilyCenter.css'

const FamilyCenterHeader = ({ handleMenuClick }) => {
  return (
    <header>
      <ul className="nav">
        <li 
          className="nav-item" 
          onClick={() => handleMenuClick('body1')}
        >
          Activity
        </li>
        <li 
          className="nav-item" 
          onClick={() => handleMenuClick('body2')}
        >
          My Family
        </li>
        <li 
          className="nav-item" 
          onClick={() => handleMenuClick('body3')}
        >
          Settings
        </li>
      </ul>
    </header>
  );
}

export default FamilyCenterHeader;
