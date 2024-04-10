import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios library

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.username ||
      !formData.email.includes("@") ||
      formData.password.length < 8 ||
      formData.password !== formData.confirmPassword
    ) {
      setError("Please ensure all fields are valid.");
      return;
    }

    try {
      // Make HTTP POST request to signup endpoint
      const response = await axios.post("http://localhost:5005/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });


      // Assuming your backend returns a success message upon successful signup
      const { message } = response.data;

      // Show success message (optional)
      alert(message);

      // Redirect to listings page after successful signup
      navigate('/listings');
    } catch (error) {
      console.error("Signup error:", error);
      setError("Failed to signup. Please try again.");
    }
  };

  return (
    <div
      className="signup-page-container mx-auto"
      style={{ maxWidth: "400px" }}
    >
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-control smaller-input" // Apply a custom class
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control smaller-input" // Apply a custom class
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
            className="form-control smaller-input" // Apply a custom class
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength="8"
            className="form-control smaller-input" // Apply a custom class
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5 mb-5">
          Sign Up
        </button>
      </form>
      {/* Dark/Light Mode Switch */}
      <div className="form-check form-switch position-fixed bottom-0 end-0 m-4">
        <input
          className="form-check-input p-2"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          defaultChecked
          onClick={myFunction}
        />
      </div>
    </div>
  );
};

export default SignupPage;