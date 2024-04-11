
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCarForm = () => {
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    color: '',
    image: '',
    price: '',
    year: '',
    cylinders: '',
    drive: 'fwd',
    fuel_type: 'gas',
    transmission: 'manual',
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://projectfinalback.adaptable.app/api/cars', carData);
      navigate("/listings");
    } catch (error) {
      const message = error.response?.data?.message || "Failed to add the car. Please try again.";
      setError(message);
      console.error("Error adding car:", message);
    }
  };

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="col-md-6 mx-auto w-400px">
        <input
          name="brand"
          value={carData.brand}
          onChange={handleChange}
          placeholder="Brand"
          className="m-3"
          style={{ width: "400px" }}
        />
        <input
          name="model"
          value={carData.model}
          onChange={handleChange}
          placeholder="Model"
          className="m-3"
          style={{ width: "400px" }}
        />
        <input
          name="year"
          type="number"
          value={carData.year}
          onChange={handleChange}
          placeholder="Year"
          className="m-3"
          style={{ width: "400px" }}
        />
        <input
          name="price"
          type="number"
          value={carData.price}
          onChange={handleChange}
          placeholder="Price"
          className="m-3"
          style={{ width: "400px" }}
        />
        <input
          name="cylinders"
          type="number"
          value={carData.cylinders}
          onChange={handleChange}
          placeholder="Cylinders"
          className="m-3"
          style={{ width: "400px" }}
        />
        <select name="drive" value={carData.drive} onChange={handleChange} className="m-3" style={{ width: "400px" }}>
          <option value="fwd">FWD</option>
          <option value="rwd">RWD</option>
          <option value="awd">AWD</option>
          <option value="4wd">4WD</option>
        </select>
        <select name="fuel_type" value={carData.fuel_type} onChange={handleChange} className="m-3" style={{ width: "400px" }}>
          <option value="gas">Gasloine</option>
          <option value="diesel">Diesel</option>
          <option value="electricity">Electricity</option>
        </select>
        <select name="transmission" value={carData.transmission} onChange={handleChange} className="m-3" style={{ width: "400px" }}>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
        <input
          name="color"
          value={carData.color}
          onChange={handleChange}
          placeholder="Color"
          className="m-3"
          style={{ width: "400px" }}
        />
        <input
          name="image"
          value={carData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="m-3"
          style={{ width: "400px" }}
        />
      </div>
      {error && <div className="text-danger">{error}</div>}
      <button type="submit" className="btn btn-ae-primary mt-5 mb-5">
        Add Car
      </button>
    </form>
  );
};

export default AddCarForm;
