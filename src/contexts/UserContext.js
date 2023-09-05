import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  users: [{
    username: 'test',
    password: '123456'
  }],
  currentUser: null,
  bookings: [],
  bookingInfo: null
};

// Create context
export const UserContext = createContext();

// Reducer function to update state
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'LOGIN_USER': {
      const { username, password } = action.payload;
      const foundUser = state.users.find(
        user => user.username === username && user.password === password
      );
      if (foundUser) {
        return { ...state, currentUser: foundUser };
      } else {
        // Handle user not found or wrong password as needed
        return { ...state };
      }
    }
    case 'SET_USER':
      return { ...state, currentUser: action.payload };
    case 'ADD_BOOKING':
      return { ...state, bookings: [...state.bookings, action.payload], bookingInfo: action.payload };
    default:
      return state;
  }
};


// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
