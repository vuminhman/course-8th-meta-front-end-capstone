import React, { useContext } from "react";
import { useUserContext } from "../../contexts/UserContext";
import './Confirmation.css';  // Import the CSS

const Confirmation = () => {
  const { state } = useUserContext();
  const { bookingInfo } = state;

  const renderFields = () => {
    return Object.keys(bookingInfo).map((key, index) => {
      if (key === "type") return null;
      return       <p key={index}>
      <span className="confirmation-key">
        {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
      </span>
      <span className="confirmation-value">{bookingInfo[key]}</span>
    </p>
    });
  };

  if (!bookingInfo) return <p>No booking information available.</p>;

  return (
    <main className="confirmation-container">
      <h2 className="confirmation-title">Confirmation</h2>
      <div className="confirmation-info">
        <p>{`You have successfully made a ${bookingInfo.type} booking.`}</p>
        {renderFields()}
      </div>
    </main>
  );
};

export default Confirmation;
