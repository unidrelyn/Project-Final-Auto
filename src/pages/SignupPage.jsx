import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios library
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { API_URL } from "../config";

const SignupPage = ({ showSign, setShowSign }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const [validated, setValidated] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		//Regex for validation
		const passwordRegex =
			/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/; // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

		// Basic validation
		if (
			!formData.name ||
			!emailRegex.test(formData.email) ||
			!passwordRegex.test(formData.password) ||
			formData.password !== formData.confirmPassword
		) {
			setError("Please ensure all fields are valid.");
			return;
		}

		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		setValidated(true);

		try {
			// Make HTTP POST request to signup endpoint
			const response = await axios.post(`${API_URL}/auth/signup`, {
				name: formData.name,
				email: formData.email,
				password: formData.password,
			});
			console.log(response.data); // Add this line
			
			const message = response.data.message || "Signup successful!";
			// Show success message (optional)
			alert(message);

			// Redirect to listings page after successful signup
			navigate("/listings");
		} catch (error) {
			console.error("Signup error:", error);
			setError("Failed to signup. Please try again.");
		}
		setShowSign(false);
	};

	return (
		<>
			<Modal show={showSign} onHide={() => setShowSign(false)}>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Modal.Header closeButton>
						<Modal.Title>Sign Up</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Group as={Col} md="auto" controlId="validationCustom01">
							<Form.Label>Username</Form.Label>
							<Form.Control
								name="name"
								type="text"
								placeholder="User Name"
								defaultValue={formData.name}
								onChange={handleChange}
								autoFocus
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a User Name
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="auto" controlId="validationCustom02">
							<Form.Label>Email</Form.Label>
							<Form.Control
								name="email"
								type="email"
								placeholder="E-mail"
								defaultValue={formData.email}
								onChange={handleChange}
								autoFocus
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a User Name
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="auto" controlId="validationCustom03">
							<Form.Label>Password</Form.Label>
							<Form.Control
								name="password"
								type="password"
								placeholder="Password"
								defaultValue={formData.password}
								onChange={handleChange}
								autoFocus
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a User Name
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} md="auto" controlId="validationCustom04">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								name="confirmPassword"
								type="password"
								placeholder="confirm Password"
								defaultValue={formData.confirmPassword}
								onChange={handleChange}
								autoFocus
								required
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a User Name
							</Form.Control.Feedback>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit">Submit form</Button>
					</Modal.Footer>
				</Form>
			</Modal>

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
		</>
	);
};

export default SignupPage;
