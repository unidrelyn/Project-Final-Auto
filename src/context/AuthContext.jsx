import React, { createContext, useContext, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // State to manage the authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedLoggedInStatus);
  }, []);
  // Function to handle login
  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/'); 
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  // Value to be provided by the context
  const authContextValue = {
    isLoggedIn,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthContext;