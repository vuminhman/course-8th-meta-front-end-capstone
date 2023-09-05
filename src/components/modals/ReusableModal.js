import React, { useEffect, useRef, useState } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import './styles.css';

const ReusableModal = ({ onClose, type, setType }) => {
  const wrapperRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsClosed(true);
        setTimeout(() => onClose(), 500);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={`modal-wrapper ${isClosed ? 'closed' : ''}`}>
      <div className="modal-content" ref={wrapperRef}>
        <span className="close-button" onClick={() => { setIsClosed(true); setTimeout(() => onClose(), 500); }}>&times;</span>
        {type === 'login' ? <Login setType={setType} onClose={onClose} /> : <SignUp setType={setType} onClose={onClose} />}
      </div>
    </div>
  );
};

export default ReusableModal;
