
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// import { useNavigate } from 'react-router-dom';
// import CarListing from '../components/CarListing';


// const ListingsPage = () => {
//   const [carListings, setCarListings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch car listings when component mounts
//     fetchCarListings();
//   }, []);

//   const fetchCarListings = async () => {
//     try {
//       // Make GET request to fetch car listings
//       const response = await axios.get('http://localhost:3000/cars');
//       setCarListings(response.data);
//     } catch (error) {
//       console.error('Error fetching car listings:', error);
//       // Handle error appropriately
//     }
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value.toLowerCase());
//   };

//   const handleEdit = (carId) => {
//     navigate(`/edit/${carId}`);
//   };

//   const handleDelete = async (carId) => {
//     if (window.confirm("Are you sure you want to delete this car?")) {
//       try {
//         // Make DELETE request to delete car
//         await axios.delete(`http://localhost:3000/cars/${carId}`);
//         // Remove the deleted car from the carListings state
//         setCarListings(prevListings => prevListings.filter(car => car.id !== carId));
//       } catch (error) {
//         console.error('Error deleting car:', error);
//         // Handle error appropriately
//       }
//     }
//   };

//   const handleAddCar = () => {
//     navigate('/add-car');
//   };

//   const filteredListings = carListings.filter(car =>
//     searchTerm === '' || 
//     (car.make && car.make.toLowerCase().includes(searchTerm)) || 
//     (car.model && car.model.toLowerCase().includes(searchTerm))
// );

// const addToCart = (car) => {
//   // Implement your add to cart functionality here
//   console.log('Added to cart:', car);
// };

//   return (
//     <div className="listings-page-container">
//     <h1>Car Listings</h1>
//     <input
//       type="text"
//       placeholder="Search by make or model..."
//       className="search-bar"
//       onChange={handleSearchChange}
//     />
//     <div className="car-listings">
//       {filteredListings.length > 0 ? (
//         filteredListings.map(car => (
//           <div key={car.id} className="car-listing-item">
//             <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" style={{ maxWidth: '200px' }} />
//             <h2>{car.make} {car.model}</h2>
//             <p>Year: {car.year}</p>
//             <p>Price: ${car.price}</p>
//             <p>{car.description}</p>
//             <button onClick={() => handleEdit(car.id)}>Edit</button>
//             <button onClick={() => handleDelete(car.id)}>Delete</button>
//             <button onClick={() => handleAddToCart(car.id)}>Add to Cart</button> {/* Add this button */}
//           </div>
//         ))
//       ) : (
//         <p>No car listings available.</p>
//       )}
//     </div>
//   </div>
// );
// };
// export default ListingsPage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import CarListing from '../components/CarListing';
import { useCart } from '../context/CartContext';
const ListingsPage = () => {
  const [carListings, setCarListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const { addToCart } = useCart();
  useEffect(() => {
    fetchCarListings();
  }, []);

  const fetchCarListings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cars');
      setCarListings(response.data);
    } catch (error) {
      console.error('Error fetching car listings:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleEdit = (carId) => {
    navigate(`/edit/${carId}`);
  };

  const handleDelete = async (carId) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await axios.delete(`http://localhost:3000/cars/${carId}`);
        setCarListings(prevListings => prevListings.filter(car => car.id !== carId));
      } catch (error) {
        console.error('Error deleting car:', error);
      }
    }
  };

  const handleAddToCart = (carId) => {
    const carToAdd = carListings.find((car) => car.id === carId);
    if (carToAdd) {
      addToCart(carToAdd);
      console.log('Added to cart:', carToAdd);
      navigate('/cart');
    }
  };


  const filteredListings = carListings.filter(car =>
    searchTerm === '' || 
    (car.make && car.make.toLowerCase().includes(searchTerm)) || 
    (car.model && car.model.toLowerCase().includes(searchTerm))
  );

  return (
    <div className="listings-page-container">
      <h1>Car Listings</h1>
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
              <img src={car.image} alt={`${car.make} ${car.model}`} className="car-image" style={{ maxWidth: '200px' }} />
              <h2>{car.make} {car.model}</h2>
              <p>Year: {car.year}</p>
              <p>Price: ${car.price}</p>
              <p>{car.description}</p>
              <button onClick={() => handleEdit(car.id)}>Edit</button>
              <button onClick={() => handleDelete(car.id)}>Delete</button>
              <button onClick={() => handleAddToCart(car.id)}>Add to Cart</button>
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