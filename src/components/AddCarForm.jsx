// import React, { useState } from 'react';
// import axios from 'axios'; // Assuming you use Axios for HTTP requests

// function AddCarForm() {
//   const [carData, setCarData] = useState({
//     make: '',
//     model: '',
//     year: '',
//     price: '',
//     description: '' // You can add more fields as needed
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState('');

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
//       // Adjust the URL to your API endpoint for adding a car listing
//       const response = await axios.post('/api/cars', carData);
//       console.log('Car added successfully:', response.data);
//       // Optionally, clear the form or provide user feedback
//       setCarData({
//         make: '',
//         model: '',
//         year: '',
//         price: '',
//         description: ''
//       });
//       setError('');
//     } catch (error) {
//       console.error('Error adding the car:', error);
//       setError('Failed to add the car. Please try again.');
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
//         {submitting ? 'Adding...' : 'Add Car'}
//       </button>
//     </form>
//   );
// }

// export default AddCarForm;

import React, { useState } from 'react';
import mockCars from '../mockData/mockCars.json'; // Import mock car data
// Remove the axios import

function AddCarForm() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Instead of making an actual HTTP request, you can handle the form submission here
      // For testing purposes, you can log the form data or perform any other desired actions
      console.log('Form submitted with data:', carData);
      
      // For more advanced testing, you can add logic to update the mock data
      // For example, if you want to add the new car to the mock data:
      // const updatedMockCars = [...mockCars, carData];
      // console.log('Updated mock cars data:', updatedMockCars);
      
      // Optionally, clear the form or provide user feedback
      setCarData({
        make: '',
        model: '',
        year: '',
        price: '',
        description: ''
      });
      setError('');
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('Failed to add the car. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="make" type="text" placeholder="Make" value={carData.make} onChange={handleChange} />
      <input name="model" type="text" placeholder="Model" value={carData.model} onChange={handleChange} />
      <input name="year" type="number" placeholder="Year" value={carData.year} onChange={handleChange} />
      <input name="price" type="text" placeholder="Price" value={carData.price} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={carData.description} onChange={handleChange} />

      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      <button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Car'}
      </button>
    </form>
  );
}

export default AddCarForm;