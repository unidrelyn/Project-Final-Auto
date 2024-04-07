import React, { useState } from "react";

function DeleteCarConfirmation({ carId, onClose, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await onDelete(carId); // onDelete is now a prop passed from the parent component
    } catch (error) {
      console.error("Error deleting the car:", error);
      setError("Failed to delete the car. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Styles omitted for brevity

  return (
    <div style={overlayStyle}>
      <div
        style={dialogStyle}
        role="dialog"
        aria-modal="true"
        aria-labelledby="deleteConfirmationTitle"
      >
        <h3 id="deleteConfirmationTitle">Confirm Deletion</h3>
        <p>Are you sure you want to delete this car listing?</p>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={onClose} disabled={isDeleting} style={buttonStyle}>
          Cancel
        </button>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          style={buttonStyle}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default DeleteCarConfirmation;
