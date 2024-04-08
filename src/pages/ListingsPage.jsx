
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarList } from "../context/CarListContext";
import axios from 'axios';
import CarListing from '../components/CarListing';
import { useCart } from '../context/CartContext';

const ListingsPage = () => {
  const [carListings, setCarListings] = useState([]);
  const { carList } = useCarList();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
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
    const carToAdd = carListings.find(car => car.id === carId);
    if (carToAdd) {
      addToCart(carToAdd);
      console.log('Added to cart:', carToAdd);
      navigate('/cart');
    }
  };

    const handleAddCar = () => {
    navigate('/add-car');
  };

  const filteredListings = carListings.filter(car =>
    searchTerm === '' || 
    (car.make && car.make.toLowerCase().includes(searchTerm)) || 
    (car.model && car.model.toLowerCase().includes(searchTerm))

  );

  return (
    <div className="listings-page-container">

    <h1>Car Listings</h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

      <input
        type="text"
        placeholder="Search by make or model..."
        className="search-bar"
        onChange={handleSearchChange}
      />

      <button onClick={handleAddCar} className="add-car-button">Add Car</button>

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

