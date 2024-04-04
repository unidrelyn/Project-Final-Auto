
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ListingsPage = () => {
//   const [carListings, setCarListings] = useState([]);

//   // Fetch car listings from the server when the component mounts
//   useEffect(() => {
//     const fetchCarListings = async () => {
//       try {
//         const response = await axios.get('/api/listings');
//         setCarListings(response.data); // Assuming response.data is an array of car listings
//       } catch (error) {
//         console.error('Error fetching car listings:', error);
//       }
//     };

//     fetchCarListings();
//   }, []); // Empty dependency array ensures this effect runs only once on component mount

//   return (
//     <div>
//       <h1>Car Listings</h1>
//       {carListings.map(car => (
//         <div key={car.id}>
//           <h2>{car.title}</h2>
//           <p>Price: ${car.price}</p>
//           <p>Year: {car.year}</p>
//           <p>Mileage: {car.mileage}</p>
//           {/* Additional car details can go here */}
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ListingsPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ListingsPage = () => {
//   const [carListings, setCarListings] = useState([]);

//   useEffect(() => {
//     // Fetch car listings data when component mounts
//     axios.get('/api/listings')
//       .then(response => {
//         setCarListings(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching car listings:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Car Listings</h1>
//       <div className="car-listings">
//         {/* Check if carListings is an array before mapping over it */}
//         {Array.isArray(carListings) ? (
//           carListings.map(car => (
//             <div key={car.id}>
//               {/* Render each car listing */}
//               <h2>{car.make} {car.model}</h2>
//               <p>Year: {car.year}</p>
//               <p>Price: ${car.price}</p>
//               {/* Add more details as needed */}
//             </div>
//           ))
//         ) : (
//           <p>No car listings available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListingsPage;


import React, { useState, useEffect } from 'react';
import mockCars from '../mockData/mockCars.json';
import { useNavigate } from 'react-router-dom';
import { useCarList } from '../context/CarListContext';


const ListingsPage = () => {
  const [carListings, setCarListings] = useState([]);
  const { carList } = useCarList();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCarListings(mockCars.cars);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleEdit = (carId) => {
    navigate(`/edit/${carId}`);
  };

  const handleDelete = (carId) => {
    console.log('Delete car with ID:', carId);
    const updatedListings = carListings.filter(car => car.id !== carId);
    setCarListings(updatedListings);
  };

  const handleAddCar = () => {
    navigate('/add-car'); // Navigate to the "Add Car" page
  };

  const filteredListings = carListings.filter(car =>
    car.make.toLowerCase().includes(searchTerm) || car.model.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="listings-page-container">
      <h1>Car Listings</h1>
      <button onClick={handleAddCar}>Add Car</button> {/* Button to navigate to the "Add Car" page */}
      <input
        type="text"
        placeholder="Search by make or model..."
        className="search-bar"
        onChange={handleSearchChange}
      />
      <div className="car-listings">
        {filteredListings.length > 0 ? (
          filteredListings.map(car => (
            <div key={car.id} className="car-listing-item">
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" />
              <h2>{car.make} {car.model}</h2>
              <p>Year: {car.year}</p>
              <p>Price: ${car.price}</p>
              <p>{car.description}</p>
              <button onClick={() => handleEdit(car.id)}>Edit</button>
              <button onClick={() => handleDelete(car.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No car listings available.</p>
        )}
      </div>
    </div>
  );
};

export default ListingsPage;