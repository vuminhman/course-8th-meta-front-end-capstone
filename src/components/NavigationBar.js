import React from 'react';

const NavigationBar = ({ onLoginClick }) => (
  <nav className="navbar">
    <ul className="nav-list">
      <li><a href="./home">Home</a></li>
      <li><a href="./home">Menu</a></li>
      <li><a href="./home">About Us</a></li>
      <li><a href="./home">Contact</a></li>
    </ul>
    <button className="login-button" onClick={onLoginClick}>Login</button>
  </nav>
);

export default NavigationBar;
