
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";


const EditCarForm = () => {
  const [carData, setCarData] = useState({
    brand: "", 
    model: "",
    year: "", 
    price: "",
    description: "",
    cylinders: "",
    drive: "",
    fuel_type: "",
    transmission: "",
    color: "",
    image: ""
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
          const response = await axios.get(`${API_URL}/api/cars/${carId}`);          
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
     await axios.put(`${API_URL}/api/cars/${carId}`, updatedCar);
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
      <form className="d-flex flex-column mt-3 vh-100" onSubmit={handleSubmit}>
        <div className="col-md-6 mx-auto">
          <h2>Edit Car Info</h2>
          <div className="form">
            {/* Existing fields */}
            <input name="brand" value={carData.brand} onChange={handleChange} placeholder="Brand" className="form m-3" style={{ width: "400px" }} />
            <input name="model" value={carData.model} onChange={handleChange} placeholder="Model" className="form m-3" style={{ width: "400px" }} />
            {/* New fields */}
            <input name="price" type="number" value={carData.price} onChange={handleChange} placeholder="Price" className="form m-3" style={{ width: "400px" }} />
            
            <select name="drive" value={carData.drive} onChange={handleChange} className="form m-3" style={{ width: "400px" }}>
              <option value="">Select Drive</option>
              <option value="fwd">FWD</option>
              <option value="rwd">RWD</option>
              <option value="awd">AWD</option>
              <option value="4wd">4WD</option>
            </select>
            <select name="fuel_type" value={carData.fuel_type} onChange={handleChange} className="form m-3" style={{ width: "400px" }}>
              <option value="">Select Fuel Type</option>
              <option value="gas">Gas</option>
              <option value="diesel">Diesel</option>
              <option value="electricity">Electricity</option>
            </select>
            <select name="transmission" value={carData.transmission} onChange={handleChange} className="form m-3" style={{ width: "400px" }}>
              <option value="">Select Transmission</option>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </select>
            <input name="color" value={carData.color} onChange={handleChange} placeholder="Color" className="form m-3" style={{ width: "400px" }} />
            <input name="image" value={carData.image} onChange={handleChange} placeholder="Image URL" className="form m-3" style={{ width: "400px" }} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-ae-primary mt-5 mb-5" style={{ width: "150px" }} disabled={submitting}>
            {submitting ? "Updating..." : "Update Car"}
          </button>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}
      </form>
    </div>
  );
};

export default EditCarForm;