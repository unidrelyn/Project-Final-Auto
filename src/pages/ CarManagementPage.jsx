

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarManagementPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cars'); 
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
      
    }
  };

  const handleDelete = async (id) => {
   
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await axios.delete(`http://localhost:3000/cars/${id}`); 
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
        console.log('Car deleted successfully.');
      } catch (error) {
        console.error('Error deleting car:', error);
       
      }
    }
  };

  // Consider adding CSS classes for styling and ensuring accessibility
  return (
    <div className="car-management-page">
      <h1>Car Management</h1>
      <table className="car-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>${car.price}</td>
              <td>{car.description}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(car.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarManagementPage;