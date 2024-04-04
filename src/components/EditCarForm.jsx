// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you use Axios for HTTP requests

// function EditCarForm({ carId }) {
//   const [carData, setCarData] = useState({
//     make: '',
//     model: '',
//     year: '',
//     price: '',
//     description: '' // You can add more fields as needed
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch the car data and populate the form
//     const fetchCarData = async () => {
//       try {
//         const response = await axios.get(`/api/cars/${carId}`);
//         setCarData(response.data); // Assume response.data contains the car data
//       } catch (error) {
//         console.error('Error fetching car data:', error);
//         setError('Failed to load car data.');
//       }
//     };

//     fetchCarData();
//   }, [carId]); // Effect runs when carId changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCarData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       // Adjust the URL to your API endpoint for updating a car listing
//       const response = await axios.put(`/api/cars/${carId}`, carData);
//       console.log('Car updated successfully:', response.data);
//       setError('');
//       // Optionally, provide user feedback or redirect
//     } catch (error) {
//       console.error('Error updating the car:', error);
//       setError('Failed to update the car. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="make" type="text" placeholder="Make" value={carData.make} onChange={handleChange} />
//       <input name="model" type="text" placeholder="Model" value={carData.model} onChange={handleChange} />
//       <input name="year" type="number" placeholder="Year" value={carData.year} onChange={handleChange} />
//       <input name="price" type="text" placeholder="Price" value={carData.price} onChange={handleChange} />
//       <textarea name="description" placeholder="Description" value={carData.description} onChange={handleChange} />

//       {error && <div style={{ color: 'red' }}>{error}</div>}

//       <button type="submit" disabled={submitting}>
//         {submitting ? 'Updating...' : 'Update Car'}
//       </button>
//     </form>
//   );
// }

// export default EditCarForm;


import React, { useState, useEffect } from 'react';
import mockCars from '../mockData/mockCars.json';
import { useNavigate } from 'react-router-dom';
import { useCarList } from '../context/CarListContext';

function EditCarForm({ carId }) {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 
  const navigate = useNavigate(); 
  const { carList, updateCar } = useCarList();
  
  useEffect(() => {
    const car = mockCars.cars.find(car => car.id === carId);
    if (car) {
      setCarData({ ...car });
    } else {
      setError('Car not found.');
    }
  }, [carId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Use mockCars.cars to access the array of cars
      const updatedCars = mockCars.cars.map(car => car.id === carId ? { ...car, ...carData } : car);
      console.log('Updated Cars:', updatedCars);
      setError('');
      setSuccess('Car details updated successfully!');
      setTimeout(() => navigate('/listings'), 2000);
    } catch (error) {
      console.error('Error updating the car:', error);
      setError('Failed to update the car. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" value={carData.make} onChange={handleChange} placeholder="Make" />
      <input name="model" value={carData.model} onChange={handleChange} placeholder="Model" />
      <input name="year" type="number" value={carData.year} onChange={handleChange} placeholder="Year" />
      <input name="price" type="number" value={carData.price} onChange={handleChange} placeholder="Price" />
      <textarea name="description" value={carData.description} onChange={handleChange} placeholder="Description" />

      <button type="submit" disabled={submitting}>{submitting ? 'Updating...' : 'Update Car'}</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}

export default EditCarForm;