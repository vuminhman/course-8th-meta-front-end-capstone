import React from 'react';

const NavigationBar = () => (
  <nav className="navbar">
    <img src="https://imgur.com/fI4GnOc.png" alt="Pho Delight Logo" id="logo" />
    <ul className="nav-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button className="login-button">Login</button>
  </nav>
);

export default NavigationBar;
