import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../contexts/UserContext';

const SignUp = ({ setType, onClose }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
  
    const { dispatch } = useUserContext();
  
    const handleSignUp = () => {
      let isValid = true;
      let newErrors = {};
  
      if (!firstName) {
        newErrors.firstName = 'First name is required';
        isValid = false;
      }
  
      if (!lastName) {
        newErrors.lastName = 'Last name is required';
        isValid = false;
      }
  
      if (!email) {
        newErrors.email = 'Email is required';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email address is invalid';
        isValid = false;
      }
  
      if (!phone) {
        newErrors.phone = 'Phone number is required';
        isValid = false;
      } else if (!/^\d+$/.test(phone)) {
        newErrors.phone = 'Phone number is invalid';
        isValid = false;
      }
  
      if (!username) {
        newErrors.username = 'Username is required';
        isValid = false;
      }
  
      if (!password) {
        newErrors.password = 'Password is required';
        isValid = false;
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
      }
  
      setErrors(newErrors);
  
      if (isValid) {
        // Commit the data to your global state
        dispatch({
          type: 'ADD_USER',
          payload: {
            firstName,
            lastName,
            email,
            phone,
            username,
            password,
          },
        });
  
        onClose()
        // Reset the form or navigate to another page
      }
    };
    
    return (
      <div>
        <h2 className="new-here">New here?</h2>
        <p className="please-log-in">Please sign up</p>

        <div className="input-wrapper">
          <FontAwesomeIcon icon={faUser} className="input-icon"/>
          <input
            className={errors.firstName ? 'firstName-input error' : 'firstName-input'}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
    
        <div className="input-wrapper">
          <FontAwesomeIcon icon={faUser} className="input-icon"/>
          <input
            className={errors.lastName ? 'lastName-input error' : 'lastName-input'}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
    
        <div className="input-wrapper">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon"/>
          <input
            className={errors.email ? 'email-input error' : 'email-input'}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errors.email && <p className="error-message">{errors.email}</p>}
    
        <div className="input-wrapper">
          <FontAwesomeIcon icon={faPhone} className="input-icon"/>
          <input
            className={errors.phone ? 'phone-input error' : 'phone-input'}
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        {errors.phone && <p className="error-message">{errors.phone}</p>}
    
        <div className="input-wrapper">
          <FontAwesomeIcon icon={faUser} className="input-icon"/>
          <input
            className={errors.username ? 'username-input error' : 'username-input'}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {errors.username && <p className="error-message">{errors.username}</p>}
    
        <div className="input-wrapper">
          <FontAwesomeIcon icon={faLock} className="input-icon"/>
          <input
            className={errors.password ? 'password-input error' : 'password-input'}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
    
        <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
        <button className="login-button" onClick={() => setType('login')}>Switch to Login</button>
      </div>
    );    
};

export default SignUp;
