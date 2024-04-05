import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleUpdateQuantity = (e) => {
    onUpdateQuantity(item.id, parseInt(e.target.value));
  };

  const handleRemoveItem = () => {
    onRemoveItem(item.id);
  };

  return (
    <div className="cart-item">
      <h3>{item.make} {item.model}</h3>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleUpdateQuantity}
      />
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default CartItem;