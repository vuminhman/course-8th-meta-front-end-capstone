import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

const Header = ({ showModal }) => {
  const navigate = useNavigate();
  
  const { state } = useUserContext();
  const { currentUser } = state;

  const handleButtonClick = (type) => {
    if (!currentUser) {
      showModal();
    } else {
      navigate(`/booking?type=${type}`);
    }
  };

  return (
    <header>
      <section id="promo-banner">
        <h1>A Culinary Journey Through Vietnam</h1>
        <p>Relish the exotic flavors of authentic Vietnamese cuisine!</p>
        <div className="action-buttons">
          <button onClick={() => handleButtonClick('reserve')}>Reserve a Table</button>
          <button onClick={() => handleButtonClick('order')}>Order for Delivery</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
