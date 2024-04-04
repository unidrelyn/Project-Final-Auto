import React, { createContext, useContext, useState } from 'react';

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // State to manage the authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const login = () => {
    // Perform your login logic here, e.g., validate credentials, set token, etc.
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    // Perform your logout logic here, e.g., clear token, reset state, etc.
    setIsLoggedIn(false);
  };

  // Value to be provided by the context
  const authContextValue = {
    isLoggedIn,
    login,
    logout
  };

  // Provide the context value to its children
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  // Use useContext hook to access the AuthContext
  return useContext(AuthContext);
};

export default AuthContext; // Export AuthContext for useContext usage