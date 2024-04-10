import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCarForm = () => {
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    description: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/cars", carData);
      navigate("/listings");
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="col-md-6 mx-auto w-400px">
        {/* Form fields for car data */}
        <input
          name="make"
          value={carData.make}
          onChange={handleChange}
          placeholder="Make"
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
        <textarea
          name="description"
          value={carData.description}
          onChange={handleChange}
          placeholder="Description"
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
      <br />
      <button type="submit" className="btn btn-ae-primary mt-5 mb-5">
        Sell Car
      </button>
    </form>
  );
};

export default AddCarForm;
