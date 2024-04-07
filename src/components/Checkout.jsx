import React, { useState } from 'react';

const Checkout = ({ cartItems, onPlaceOrder }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    paymentMethod: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
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
    if (formData.fullName.trim() === '') {
      alert('Please enter your full name.');
      return false;
    }
    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (formData.address.trim() === '') {
      alert('Please enter your address.');
      return false;
    }
    if (formData.paymentMethod === '') {
      alert('Please select a payment method.');
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

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;