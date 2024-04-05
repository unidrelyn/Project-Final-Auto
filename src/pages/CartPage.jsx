import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust the path as necessary

const CartPage = () => {
  const { cartItems, removeFromCart, proceedToCheckout } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ listStyleType: 'none', marginBottom: '20px' }}>
              {/* Displaying the car image */}
              <img
                src={item.imageUrl || '/path/to/default-image.png'} // Fallback to a default image if imageUrl is not available
                alt={`${item.make} ${item.model}`}
                style={{ maxWidth: '200px', height: 'auto' }}
              />
              <h2>{item.make} {item.model}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;