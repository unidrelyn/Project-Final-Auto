
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarManagementPage = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(''); // Add state for error handling

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      // Update with your backend service URL
      const response = await axios.get('https://projectfinalback.adaptable.app/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setError('Failed to fetch cars.'); // Set error message
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        // Update with your backend service URL
        await axios.delete(`https://projectfinalback.adaptable.app/api/cars/${id}`);
        const updatedCars = cars.filter(car => car._id !== id); // Use _id if your DB uses MongoDB
        setCars(updatedCars);
        console.log('Car deleted successfully.');
      } catch (error) {
        console.error('Error deleting car:', error);
        setError('Failed to delete the car.'); // Set error message
      }
    }
  };

  return (
    <div className="car-management-page">
      <h1>Car Management</h1>
      {error && <p className="error-message">{error}</p>} // Display error message if any
      <table className="car-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th> {/* Adjusted to 'Brand' */}
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Actions</th> {/* Removed 'Description' for simplicity */}
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}> {/* Use _id for MongoDB */}
              <td>{car._id}</td>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>${car.price}</td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(car._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Consider reevaluating the need for the Dark/Light Mode Switch here */}
    </div>
  );
};

export default CarManagementPage;