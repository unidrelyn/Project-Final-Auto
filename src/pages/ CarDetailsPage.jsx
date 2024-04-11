
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import NotFoundPage from './NotFoundPage'; 

const CarDetailsPage = () => {
  const { carId } = useParams(); // Make sure 'carId' matches the dynamic segment in your route
  const [carDetails, setCarDetails] = useState(null);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        // Update the URL to match your deployed backend service
        const response = await axios.get(`https://projectfinalback.adaptable.app/api/cars/${carId}`);
        setCarDetails(response.data);
        setLoading(false); // Set loading to false upon success
      } catch (err) {
        setError('Car not found'); // Error handling
        setLoading(false); // Ensure loading is set to false even on error
        console.error('Error fetching car details:', err);
      }
    };

    fetchCarDetails();
  }, [carId]);

  if (loading) {
    return <p>Loading car details...</p>; // Display loading message while data is fetching
  }

  if (error) {
    return <p className="error-message">{error}</p>; // Display error message if any
  }

  if (!carDetails) {
    return <NotFoundPage />; // Show NotFoundPage if car details not found
  }

  // Car details content
  return (
    <div className="car-details-container">
      <div className="car-details">
        <h1>{carDetails.brand} {carDetails.model}</h1> {/* Adjusted to 'brand' as per your schema */}
        <p>Price: ${carDetails.price}</p>
        <p>Year: {carDetails.year}</p>
        <p>Color: {carDetails.color}</p>
        {/* Add more car details here */}
      </div>
      {/* Consider removing or adjusting the dark/light mode switch */}
    </div>
  );
};

export default CarDetailsPage;
