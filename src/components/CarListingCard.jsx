

import React from 'react';

function CarListingCard({ car, onEdit, onDelete }) {
  return (
    <div className="car-listing-card" style={cardStyle}>
      <img src={car.imageUrl || '/path/to/default-car-image.png'} alt={`${car.make} ${car.model}`} style={imageStyle} />
      <div style={detailsStyle}>
        <h3>{`${car.make} ${car.model}`}</h3>
        <p>Year: {car.year}</p>
        <p>Price: ${car.price.toLocaleString()}</p>
        {/* Additional details */}
        <div style={buttonContainerStyle}>
          <button onClick={() => onEdit(car.id)} style={buttonStyle}>Edit</button>
          <button onClick={() => onDelete(car.id)} style={buttonStyle}>Delete</button>
        </div>
      </div>
    </div>
  );
}

// Existing styles...
const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

const buttonStyle = {
  cursor: 'pointer',
  margin: '0 5px',
  // Additional button styling...
};

export default CarListingCard;