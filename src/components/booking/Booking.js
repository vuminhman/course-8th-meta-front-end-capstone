import React, { useState } from 'react';
import './Booking.css'; // Import the CSS
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Booking = ({ bookingType, formTitle, fields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    fields.forEach(({ name, type }) => {
      if (!formData[name]) {
        isValid = false;
        errors[name] = 'This field is required';
      } else if (type === 'date' && !/\d{4}-\d{2}-\d{2}/.test(formData[name])) {
        isValid = false;
        errors[name] = 'Invalid date format';
      } else if (type === 'time' && !/\d{2}:\d{2}/.test(formData[name])) {
        isValid = false;
        errors[name] = 'Invalid time format';
      } else if (type === 'number' && isNaN(formData[name])) {
        isValid = false;
        errors[name] = 'Invalid number';
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(bookingType, formData);
      dispatch({ type: 'ADD_BOOKING', payload: { ...formData, type: bookingType } });
      navigate(`/confirmation`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>{formTitle}</h2>
      {fields.map(({ label, name, type }) => (
        <div className="form-group" key={name}>
          <label className="form-label">
            {label}:
          </label>
          <input
            className={`form-input ${formErrors[name] ? 'input-error' : ''}`}
            type={type}
            name={name}
            value={formData[name] || ''}
            onChange={handleInputChange}
          />
          {formErrors[name] && <span className="error-message">{formErrors[name]}</span>}
        </div>
      ))}
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Booking;
