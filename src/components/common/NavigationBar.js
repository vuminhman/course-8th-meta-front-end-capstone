import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';  // replace with your actual path

const NavigationBar = ({ onLoginClick }) => {
  const { state } = useUserContext();
  const { currentUser } = state;

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking?type=reserve">Reserve a Table</Link></li>
        <li><Link to="/booking?type=order">Order Delivery</Link></li>
      </ul>
      {
        currentUser ? 
        <span>Hello, {currentUser.username}</span> : 
        <button className="login-button" onClick={onLoginClick}>Login</button>
      }
    </nav>
  );
};

export default NavigationBar;
