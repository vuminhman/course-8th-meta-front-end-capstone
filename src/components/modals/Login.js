import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../../contexts/UserContext';

const Login = ({ setType, onClose }) => {
  const { state, dispatch } = useUserContext(); // Use the hook to get state and dispatch
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = 'Username is required.';
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        // Commit the logged-in user to your global state or just set a flag
        dispatch({ type: 'LOGIN_USER', payload: user });
        onClose();
      } else {
        setErrors({ form: 'Invalid username or password' });
      }
    }
  };

  return (
    <div>
      <h2 className="already-signed-up">Already signed up?</h2>
      <p className="please-log-in">Please log in</p>
      <div className="input-wrapper">
        <FontAwesomeIcon icon={faUser} className="input-icon" />
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
        <FontAwesomeIcon icon={faLock} className="input-icon" />
        <input
          className={errors.password ? 'password-input error' : 'password-input'}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors.password && <p className="error-message">{errors.password}</p>}

      {errors.form && <p className="error-message">{errors.form}</p>}

      <button className="login-button" onClick={handleLogin}>Login</button>
      <button className="signup-button" onClick={() => setType('signup')}>Sign Up</button>
    </div>
  );
};

export default Login;
