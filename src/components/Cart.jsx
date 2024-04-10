import React from "react";
import EmptyCart from "../assets/EmptyC.svg";

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const handleUpdateQuantity = (itemId, quantity) => {
    onUpdateQuantity(itemId, quantity);
  };

  const handleRemoveItem = (itemId) => {
    onRemoveItem(itemId);
  };

  const handleCheckout = () => {
    const confirmed = window.confirm(
      "Are you sure you want to proceed to checkout?"
    );
    if (confirmed) {
      onCheckout();
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>
                {item.make} {item.model}
              </h3>
              <p>Price: ${item.price}</p>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  handleUpdateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      ) : (
        <p>Your cart is empty. Continue shopping!</p>
      )}
    </div>
  );
};

export default Cart;
