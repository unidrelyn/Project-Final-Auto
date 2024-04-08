import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (car) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === car.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...car, quantity: 1 }];
    });
  };

  const removeFromCart = (carId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== carId)
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};