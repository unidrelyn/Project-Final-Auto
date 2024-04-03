// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate programmatically

// const SignupPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // For navigation after signup

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior

//     // Here you can implement your signup logic, such as validating user input
//     // For demonstration purposes, assume signup is successful if username, email, and password are not empty
//     if (username && email && password) {
//       // Redirect to the homepage after successful signup
//       navigate('/');
//     } else {
//       // Display an error message or handle signup failure
//       console.error('Incomplete signup form');
//     }
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!formData.username || !formData.email.includes('@') || formData.password.length < 8) {
      setError('Please ensure all fields are valid.');
      return;
    }

    // Implement secure signup logic here
    console.log('Signup attempt with:', formData);

    // Simulate successful signup
    setTimeout(() => {
      setError('');
      navigate('/'); // Redirect to homepage on successful signup
    }, 1000);
  };

  return (
    <div className="signup-page-container">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required minLength="8" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;