import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Ensure this path matches your file structure
import { API_URL } from "../config";
export const LoginPage = () => {
  const [email, setEmail] = useState(""); // Use email for login identifier
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status
  const { authenticateUser } = useContext(AuthContext); // Destructure only what you need from context
  const navigate = useNavigate(); // 'nav' changed to 'navigate' for clarity

  // Handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Indicate loading
    setError(null); // Reset any existing errors

    try {
      const response = await axios.post(
        `${API_URL}/auth/login`,
        { email, password } // Use the state variables directly
      );

      console.log("You logged in", response.data);
      localStorage.setItem("authToken", response.data.authToken); // Assuming 'authToken' is the correct key
      await authenticateUser(); // Re-authenticate the user after login
      navigate("/listings"); // Ensure this route exists in your app
      setIsLoading(false); // Reset loading status
    } catch (err) {

      console.error("There was an error logging in",err);

      setError("Failed to login. Please try again.");
      setIsLoading(false); // Reset loading status even in case of error
    }
  };

  return (
    <div
      className="login-page-container mx-auto vh-100"
      style={{ width: "400px" }}
    >
      <h1>Login</h1>
      {error && <p className="error-message m-2">{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group m-2">
          <label htmlFor="email" className="m-3">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            className="form-control smaller-input"
            style={{ width: "400px" }}
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
            className="form-control smaller-input"
            style={{ width: "400px" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-ae-primary mt-5 mb-5"
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
