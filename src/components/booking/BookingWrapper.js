import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import Reserve from './Reserve';
import Order from './Order';

const BookingWrapper = ({ showModal, onClose }) => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type'); // Will be either 'reserve' or 'order'
  
  const { state } = useUserContext();
  const { currentUser } = state;

  const handleSubmit = (bookingType, formData) => {
    console.log('Form type submitted:', bookingType);
    console.log('Form data submitted:', formData);
  };

  if (!currentUser) {
    showModal();
    return null;
  }

  return (
    <main>
      {type === 'reserve' && <Reserve onSubmit={handleSubmit} />}
      {type === 'order' && <Order onSubmit={handleSubmit} />}
    </main>
  );
};

export default BookingWrapper;
