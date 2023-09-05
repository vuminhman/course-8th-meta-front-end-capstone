import React from 'react';
import Booking from './Booking';

const Order = ({ onSubmit }) => {
  const fields = [
    { label: 'Address', name: 'address', type: 'text' },
    { label: 'Food', name: 'food', type: 'text' },
  ];

  const formTitle = 'Order for Delivery'
  const bookingType = 'Order'

  return (
    <div>
      <Booking bookingType={bookingType} formTitle={formTitle} fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default Order;