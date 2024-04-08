;


import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useCart } from '../context/CartContext'; 

const CartPage = () => {
  const navigate = useNavigate(); 
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ listStyleType: 'none', marginBottom: '20px' }}>
              <img src={item.image} alt={`${item.make} ${item.model}`} style={{ maxWidth: '200px', height: 'auto' }} />
              <h2>{item.make} {item.model}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;