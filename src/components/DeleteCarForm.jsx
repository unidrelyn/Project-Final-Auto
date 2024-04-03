// import React, { useState } from 'react';
// import axios from 'axios';

// function DeleteCarConfirmation({ carId, onClose, onDeleted }) {
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [error, setError] = useState('');

//   const handleDelete = async () => {
//     setIsDeleting(true);

//     try {
//       // Adjust the URL to your API endpoint for deleting a car listing
//       await axios.delete(`/api/cars/${carId}`);
//       onDeleted(); // Callback function to inform parent component that the car has been deleted
//     } catch (error) {
//       console.error('Error deleting the car:', error);
//       setError('Failed to delete the car. Please try again.');
//     } finally {
//       setIsDeleting(false);
//     }
//   };

//   return (
//     <div style={overlayStyle}>
//       <div style={dialogStyle}>
//         <h3>Confirm Deletion</h3>
//         <p>Are you sure you want to delete this car listing?</p>
//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <button onClick={onClose} disabled={isDeleting} style={buttonStyle}>
//           Cancel
//         </button>
//         <button onClick={handleDelete} disabled={isDeleting} style={buttonStyle}>
//           {isDeleting ? 'Deleting...' : 'Delete'}
//         </button>
//       </div>
//     </div>
//   );
// }

// // Example styles, adjust as needed
// const overlayStyle = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// const dialogStyle = {
//   backgroundColor: '#fff',
//   padding: '20px',
//   borderRadius: '5px',
//   maxWidth: '500px',
//   width: '100%',
// };

// const buttonStyle = {
//   margin: '10px',
// };

// export default DeleteCarConfirmation;

import React, { useState } from 'react';
import mockCars from '../mockData/mockCars.json'; // Import mockCars data

function DeleteCarConfirmation({ carId, onClose, onDeleted }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      // Simulate deletion by filtering out the car with the specified ID
      const updatedCars = mockCars.filter(car => car.id !== carId);
      // Update the mockCars data with the filtered list
      // This assumes mockCars is a mutable array; adjust accordingly if not
      mockCars.splice(0, mockCars.length, ...updatedCars);
      onDeleted(); // Callback function to inform parent component that the car has been deleted
    } catch (error) {
      console.error('Error deleting the car:', error);
      setError('Failed to delete the car. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Example styles for demonstration purposes
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dialogStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '500px',
    width: '100%',
  };

  const buttonStyle = {
    margin: '10px',
  };

  return (
    <div style={overlayStyle}>
      <div style={dialogStyle}>
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete this car listing?</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button onClick={onClose} disabled={isDeleting} style={buttonStyle}>
          Cancel
        </button>
        <button onClick={handleDelete} disabled={isDeleting} style={buttonStyle}>
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
}

export default DeleteCarConfirmation;