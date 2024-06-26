import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container vh-100">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div className="row w-75 mx-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="col-12 mb-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={item.image}
                      alt={`${item.make} ${item.model}`}
                      style={{
                        width: "100%",
                        maxHeight: "600px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.brand}
                        {item.model}
                      </h5>
                      <ul className="list-unstyled text-left pl-4">
                        <li>Price: ${item.price}</li>
                        <li>Class: {item.class}</li>
                        <li>Fuel Type: {item.fuel_type}</li>
                        <li>Brand: {item.brand}</li>
                        <li>Model: {item.model}</li>
                        <li>Year: {item.year}</li>
                        <li>Color: {item.color}</li>
                      </ul>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-secondary"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button
        onClick={() => navigate("/checkout")}
        className="btn btn-ae-primary mt-2 mb-5 "
        style={{
          backgroundColor: "#7749F8",
          color: "white",
          borderColor: "#59359A",
        }}
      >
        Proceed to Checkout
      </button>
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
    </div>
  );
};

export default CartPage;
