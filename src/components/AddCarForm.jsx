
import React, { useState } from 'react';
import axios from 'axios'; 
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
     
      await axios.post('http://localhost:5005/api/cars', carData);
      navigate('/listings'); 
    } catch (error) {
      console.error('Error adding car:', error);
      
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
