// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CarManagementPage = () => {
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // Fetch car data from mock API
//     axios.get('/api/cars')
//       .then(response => {
//         setCars(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching cars:', error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     // Delete car by id
//     axios.delete(`/api/cars/${id}`)
//       .then(() => {
//         // Filter out the deleted car from the list
//         setCars(prevCars => prevCars.filter(car => car.id !== id));
//       })
//       .catch(error => {
//         console.error('Error deleting car:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Car Management</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Make</th>
//             <th>Model</th>
//             <th>Year</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cars.map(car => (
//             <tr key={car.id}>
//               <td>{car.id}</td>
//               <td>{car.make}</td>
//               <td>{car.model}</td>
//               <td>{car.year}</td>
//               <td>${car.price}</td>
//               <td>{car.description}</td>
//               <td>
//                 <button onClick={() => handleDelete(car.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CarManagementPage;


import React, { useState, useEffect } from 'react';
import mockCars from '../mockData/mockCars.json';

const CarManagementPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Assuming mockCars is the initial mock data you have for cars
    setCars(mockCars);
  }, []);

  const handleDelete = (id) => {
    // Simple confirmation dialog before deleting
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        // Filter out the car with the given id
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
        // Optionally, you can add more robust error handling here
      } catch (error) {
        console.error('Error deleting car:', error);
        // Display error message or handle error appropriately
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