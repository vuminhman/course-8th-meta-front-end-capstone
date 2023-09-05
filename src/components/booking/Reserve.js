import React from 'react';
import Booking from './Booking';

const Reserve = ({ onSubmit }) => {
  const fields = [
    { label: 'Date', name: 'date', type: 'date' },
    { label: 'Time', name: 'time', type: 'time' },
    { label: 'Number of Guests', name: 'guests', type: 'number' },
  ];

  const formTitle = 'Reserve a Table'
  const bookingType = 'Reserve'

  return (
    <div>
      <Booking bookingType={bookingType} formTitle={formTitle} fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Reserve;