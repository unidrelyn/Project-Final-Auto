
import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  console.log(item);

  const handleUpdateQuantity = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, newQuantity);
    }
    
  };

  const handleRemoveItem = () => {
    const confirmed = window.confirm("Are you sure you want to remove this item from the cart?");
    if (confirmed) {
      onRemoveItem(item.id);
    }
  };
  

  return (
    <div className="cart-item">
     <img src={item.image} alt={`${item.make} ${item.model}`} style={{ maxWidth: '100px', height: 'auto' }} />
      <h3>{item.make} {item.model}</h3>
      <p>Price: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleUpdateQuantity}
      />
      <button aria-label="Remove item" onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default CartItem;