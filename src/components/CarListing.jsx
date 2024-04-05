import React from 'react';

const CarListing = ({ car, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(car);
  };

  return (
    <div className="car-listing">
      <h3>{car.make} {car.model}</h3>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CarListing;