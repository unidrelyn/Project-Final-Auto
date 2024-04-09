import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => { // Add 'e' as parameter
    e.preventDefault(); // Prevent form submission
  
    // Basic validation
    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }
  
    setIsLoading(true);
    setError("");

  
    try {
      // Simulate login process
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to home page after successful login
        navigate('/listings');
        // Call onLoginSuccess to update authentication state in parent component
        onLoginSuccess();

      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <h1>Login</h1>
      {error && <p className="error-message m-2">{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group m-2">
          <label className="m-3" htmlFor="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Username"
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="password" className="m-3">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-5 mb-5"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
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

export default LoginPage;
