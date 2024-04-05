// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
// import axios from 'axios';

// const CarDetailsPage = () => {
//   const { id } = useParams(); // Access the car ID from URL parameters
//   const [carDetails, setCarDetails] = useState(null);

//   // Fetch car details from the server when the component mounts
//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       try {
//         const response = await axios.get(`/api/listings/${id}`);
//         setCarDetails(response.data); // Assuming response.data contains details of the car
//       } catch (error) {
//         console.error('Error fetching car details:', error);
//       }
//     };

//     fetchCarDetails();
//   }, [id]); // Re-fetch car details whenever the car ID changes

//   return (
//     <div>
//       <h1>Car Details</h1>
//       {carDetails ? (
//         <div>
//           <h2>{carDetails.title}</h2>
//           <p>Price: ${carDetails.price}</p>
//           <p>Year: {carDetails.year}</p>
//           <p>Mileage: {carDetails.mileage}</p>
//           {/* Additional car details can go here */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default CarDetailsPage;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockCarsData from "../mockData/mockCars.json"; // Import mock cars data
import NotFoundPage from "./NotFoundPage"; // Import a NotFoundPage component if needed

const CarDetailsPage = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [error, setError] = useState(null); // Added for error handling

  useEffect(() => {
    const fetchCarDetails = () => {
      try {
        const car = mockCarsData.find((car) => car.id === parseInt(id));
        if (car) {
          setCarDetails(car);
        } else {
          // If car is not found, set carDetails to null and log an error or handle appropriately
          setCarDetails(null);
          setError("Car not found"); // Example error handling
        }
      } catch (err) {
        setError(err.message); // More robust error handling
        console.error("Error fetching car details:", err);
      }
    };

    fetchCarDetails();
  }, [id]);

  // Remember to validate/sanitize data when integrating with real data sources or user inputs to prevent XSS attacks
  // Consider adding CSS classes or inline styles for better styling and responsiveness
  // Use more semantic HTML where appropriate for better accessibility
  return (
    <div className="car-details-container">
      {" "}
      {/* Example CSS class */}
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message if any */}
      {carDetails ? (
        <div className="car-details">
          {" "}
          {/* Example CSS class */}
          <h1>
            {carDetails.make} {carDetails.model}
          </h1>
          <p>Price: ${carDetails.price}</p>
          <p>Year: {carDetails.year}</p>
          {/* Add more car details here */}
        </div>
      ) : (
        !error && <NotFoundPage /> // Show NotFoundPage only if there's no error
      )}
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

export default CarDetailsPage;
