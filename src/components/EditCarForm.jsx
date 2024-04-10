import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCarForm() {
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    year: 0,
    price: 0,
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { carId } = useParams();

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        if (carId) {
          const response = await axios.get(
            `http://localhost:3000/cars/${carId}`
          );
          setCarData(response.data);
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
        setError("Failed to fetch car details");
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const editCar = async (updatedCar) => {
    try {
      await axios.put(`http://localhost:3000/cars/${carId}`, updatedCar);
      setSuccess("Car details updated successfully!");
      setTimeout(() => navigate("/listings"), 2000);
    } catch (error) {
      console.error("Error updating the car:", error);
      setError("Failed to update the car. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    await editCar(carData);
  };

  return (
    <div>
      <form className="d-flex flex-column h-100 mt-3" onSubmit={handleSubmit}>
        <div className="col-md-6 mx-auto">
          <h2>Edit Car Info</h2>
          <div className="form">
            <input
              name="make"
              value={carData.make}
              onChange={handleChange}
              placeholder="Make"
              className="form m-3"
              style={{ width: "400px" }}
            />
            <input
              name="model"
              value={carData.model}
              onChange={handleChange}
              placeholder="Model"
              className="form m-3"
              style={{ width: "400px" }}
            />
            <input
              name="year"
              type="number"
              value={carData.year}
              onChange={handleChange}
              placeholder="Year"
              className=" form m-3"
              style={{ width: "400px" }}
            />
            <input
              name="price"
              type="number"
              value={carData.price}
              onChange={handleChange}
              placeholder="Price"
              className="form m-3"
              style={{ width: "400px" }}
            />
            <input
              name="description"
              value={carData.description}
              onChange={handleChange}
              placeholder="Description"
              className="form m-3"
              style={{ width: "400px" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-ae-primary mt-5 mb-5"
            style={{ width: "150px" }}
            disabled={submitting}
          >
            {submitting ? "Updating..." : "Update Car"}
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}
      </form>
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
  );
}

export default EditCarForm;
