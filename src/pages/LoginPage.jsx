import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Ensure this path matches your file structure
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { API_URL } from "../config";
export const LoginPage = ({ showLogin, setShowLogin }) => {
	const [email, setEmail] = useState(""); // Use email for login identifier
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false); // State to manage loading status
	const { authenticateUser } = useContext(AuthContext); // Destructure only what you need from context
	const navigate = useNavigate(); // 'nav' changed to 'navigate' for clarity


	const [validated, setValidated] = useState(false);


	// Handle form submission
	const handleLogin = async (event) => {
		event.preventDefault();
		setIsLoading(true); // Indicate loading
		setError(null); // Reset any existing errors


		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
console.log(email, password)
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
			console.error("There was an error logging in", err);

			setError("Failed to login. Please try again.");
			setIsLoading(false); // Reset loading status even in case of error
		}

		setShowLogin(false);
	};

	return (
		<Modal show={showLogin} onHide={() => setShowLogin(false)}>
			<Form noValidate validated={validated} onSubmit={handleLogin}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group as={Col} md="auto" controlId="validationCustom01">
						<Form.Label>Email</Form.Label>
						<Form.Control
							name="email"
							type="email"
							placeholder="E-mail"
							defaultValue={email}
							onChange={(e) => setEmail(e.target.value)}
							autoFocus
							required
						/>
						<Form.Control.Feedback type="invalid">
							Please provide a Email
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="auto" controlId="validationCustom02">
						<Form.Label>Password</Form.Label>
						<Form.Control
							name="password"
							type="password"
							placeholder="Password"
							defaultValue={password}
							onChange={(e) => setPassword(e.target.value)}
							autoFocus
							required
						/>
						<Form.Control.Feedback type="invalid">
							Please provide a Password
						</Form.Control.Feedback>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button type="submit">Login</Button>
				</Modal.Footer>
			</Form>

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
		</Modal>
	);
};

export default LoginPage;
