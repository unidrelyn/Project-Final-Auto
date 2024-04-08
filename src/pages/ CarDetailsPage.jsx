

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFoundPage from './NotFoundPage'; 
const CarDetailsPage = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/cars/${id}`);
        setCarDetails(response.data);
      } catch (err) {
        setError('Car not found'); // Example error handling
        console.error('Error fetching car details:', err);
      }
    };

    fetchCarDetails();
  }, [id]);

  
  return (
    <div className="car-details-container"> {/* Example CSS class */}
      {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
      {carDetails ? (
        <div className="car-details"> {/* Example CSS class */}
          <h1>{carDetails.make} {carDetails.model}</h1>
          <p>Price: ${carDetails.price}</p>
          <p>Year: {carDetails.year}</p>
          {/* Add more car details here */}
        </div>
      ) : (
        !error && <NotFoundPage /> // Show NotFoundPage only if there's no error
      )}
    </div>
  );
};

export default CarDetailsPage;