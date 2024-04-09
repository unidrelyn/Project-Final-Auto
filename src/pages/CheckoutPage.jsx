import React from "react";
import Checkout from "../components/Checkout";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Function to handle the placement of an order
  const handlePlaceOrder = (formData, items) => {
    console.log("Order placed with:", formData, items);

    items.forEach((item) => removeFromCart(item.id));

    alert("Thank you for your order!");
  };

  return (
    <div
      className="checkout-page-page-container mx-auto"
      style={{ maxWidth: "400px" }}
    >
      <h1>Checkout</h1>
      {/* Display a summary of cart items */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <div className="col">
          <ul style={{ listStyleType: "none" }}>
            {cartItems.map((item) => (
              <li className="col d-flex" key={item.id}>
                <img
                  className="m-4"
                  src={item.image}
                  style={{ width: "100px" }}
                  alt={`${item.make} ${item.model}`}
                />
                {item.make} <br />
                {item.model} <br /> Quantity {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Checkout form */}
      <Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
    </div>
  );
};

export default CheckoutPage;
