
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom';

const AddCarForm = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to add the new car data to the backend
      await axios.post('http://localhost:3000/cars', carData);
      navigate('/listings'); // Redirect to the listings page after successfully adding the car
    } catch (error) {
      console.error('Error adding car:', error);
      // Handle error (e.g., display a message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for car data */}
      <input name="make" value={carData.make} onChange={handleChange} placeholder="Make" />
      <input name="model" value={carData.model} onChange={handleChange} placeholder="Model" />
      <input name="year" type="number" value={carData.year} onChange={handleChange} placeholder="Year" />
      <input name="price" type="number" value={carData.price} onChange={handleChange} placeholder="Price" />
      <textarea name="description" value={carData.description} onChange={handleChange} placeholder="Description" />
      <input name="image" value={carData.image} onChange={handleChange} placeholder="Image URL" />
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCarForm;
