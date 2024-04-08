import React from 'react';
import Checkout from '../components/Checkout'; 
import { useCart } from '../context/CartContext'; 

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart(); 

  // Function to handle the placement of an order
  const handlePlaceOrder = (formData, items) => {
    console.log('Order placed with:', formData, items);
   
    
   
    items.forEach(item => removeFromCart(item.id));

   
    alert('Thank you for your order!'); 
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {/* Display a summary of cart items */}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.make} {item.model} - Quantity: {item.quantity}</li>
          ))}
        </ul>
      </div>
      {/* Checkout form */}
      <Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
    </div>
  );
};

export default CheckoutPage;