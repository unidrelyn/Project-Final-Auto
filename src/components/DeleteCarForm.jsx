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

function DeleteCarConfirmation({ carId, onClose, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await onDelete(carId); // onDelete is now a prop passed from the parent component
    } catch (error) {
      console.error('Error deleting the car:', error);
      setError('Failed to delete the car. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  // Styles omitted for brevity

  return (
    <div style={overlayStyle}>
      <div style={dialogStyle} role="dialog" aria-modal="true" aria-labelledby="deleteConfirmationTitle">
        <h3 id="deleteConfirmationTitle">Confirm Deletion</h3>
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