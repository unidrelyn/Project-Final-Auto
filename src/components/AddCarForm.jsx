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
import { useCarList } from '../context/CarListContext'; // Import your custom hook from the context
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
  const { addCar } = useCarList(); // Destructure the addCar function from your context
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({ ...carData, id: Date.now() }); // Use Date.now() for a simple unique ID or your preferred method
    navigate('/listings'); // Redirect to the listings page or confirmation page
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