import React from 'react';

function CarListingCard({ car }) {
  return (
    <div className="car-listing-card" style={cardStyle}>
      <img src={car.imageUrl || '/path/to/default-car-image.png'} alt={`${car.make} ${car.model}`} style={imageStyle} />
      <div style={detailsStyle}>
        <h3>{`${car.make} ${car.model}`}</h3>
        <p>Year: {car.year}</p>
        <p>Price: ${car.price.toLocaleString()}</p>
        {/* You can add more details here */}
      </div>
    </div>
  );
}

// Inline styles for demonstration, consider using a CSS file for real applications
const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: '300px', // Adjust based on your layout
  margin: '10px',
};

const imageStyle = {
  width: '100%',
  height: '200px', // Adjust based on your layout
  objectFit: 'cover',
};

const detailsStyle = {
  padding: '2px 16px',
};

export default CarListingCard;