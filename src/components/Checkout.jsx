import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

const Checkout = ({ cartItems }) => {
	const { clearCart } = useCart();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		address: "",
		paymentMethod: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Validate form fields before placing the order
		if (validateForm()) {
			// Call the onPlaceOrder function to place the order
			onPlaceOrder(formData, cartItems);
		}
	};

	// Function to validate form fields
	const validateForm = () => {
		// Perform validation for each field
		if (formData.fullName.trim() === "") {
			alert("Please enter your full name.");
			return false;
		}
		if (!isValidEmail(formData.email)) {
			alert("Please enter a valid email address.");
			return false;
		}
		if (formData.address.trim() === "") {
			alert("Please enter your address.");
			return false;
		}
		if (formData.paymentMethod === "") {
			alert("Please select a payment method.");
			return false;
		}
		// If all fields are valid, return true
		return true;
	};

	// Function to validate email format
	const isValidEmail = (email) => {
		// Regular expression for email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const onPlaceOrder = async () => {
		// Construct the order data structure
		const orderData = {
			customerInfo: {
				fullName: formData.fullName,  // Assuming formData is your state holding form inputs
				email: formData.email,
				address: formData.address,
			},
			items: cartItems.map((item) => ({  // Assuming cartItems holds items in the cart
				carId: item._id,  // Ensure this matches the property holding the ObjectId in your car items
				quantity: item.quantity || 1,  // Default quantity to 1 if undefined
			})),
			paymentMethod: formData.paymentMethod,  // Assuming this is part of your form data as well
		};
	
		try {
			// Sending the order data to your backend
			const response = await axios.post(`${API_URL}/api/orders`, orderData);
	
			// Handling the successful response
			console.log("Order placed successfully:", response.data);
			alert("Order placed successfully!");
	
			// Additional actions on successful order placement:
			// - Clearing the cart
			// - Redirecting the user, possibly to a confirmation page
			clearCart();  // Assuming clearCart is a function available in your context or props
			navigate("/");  // Adjust the route as necessary
		} catch (error) {
			// Handling errors, including those returned from the server
			console.error("Error placing order:", error);
	
			const errorMessage = error.response && error.response.data && error.response.data.error
				? error.response.data.error
				: "Error placing order. Please try again.";
	
			alert(errorMessage);
		}
	};

	return (
		<div className="checkout">
			<div
				className="signup-page-container mx-auto"
				style={{ maxWidth: "400px" }}
			>
				<form onSubmit={handleSubmit}>
					<label>
						Full Name:
						<input
							type="text"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
							required
							className="input-group input-group-sm mb-3"
							style={{ width: "400px" }}
						/>
					</label>
					<label>
						Email:
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="input-group input-group-sm mb-3"
							style={{ width: "400px" }}
						/>
					</label>
					<label>
						Address:
						<textarea
							name="address"
							value={formData.address}
							onChange={handleChange}
							required
							className="input-group input-group-sm mb-3"
							style={{ width: "400px" }}
						></textarea>
					</label>
					<label>
						Payment Method:
						<select
							name="paymentMethod"
							value={formData.paymentMethod}
							onChange={handleChange}
							required
							className="input-group input-group-sm mb-3"
							style={{ width: "400px" }}
						>
							<option value="">Select Payment Method</option>
							<option value="creditCard">Credit Card</option>
							<option value="paypal">PayPal</option>
							<option value="bankTransfer">Bank Transfer</option>
						</select>
					</label>
					<button type="submit" className="btn btn-ae-primary mt-5 mb-5">
						Place Order
					</button>
				</form>
			</div>
		</div>
	);
};

export default Checkout;
