import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for redirection
import authService from '../services/AuthService';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const history = useHistory(); // Initialize useHistory for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      await authService.signup(email, password);
      setError(''); // Clear any previous error messages
      history.push('/login'); // Redirect to the login page upon successful account creation
    } catch (error) {
      setError('Failed to create an account. Please try again.'); // Display an account creation error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required // Adding HTML5 form validation
        />
      </div>
      
      <div>
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required // Adding HTML5 form validation
        />
      </div>
      
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>} {/* Error message display */}
      
      <button type="submit" style={{ marginTop: '10px' }}>Sign Up</button>
    </form>
  );
}

export default SignupForm;