import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarList } from "../context/CarListContext";
import axios from "axios";
import CarListing from "../components/CarListing";
import { useCart } from "../context/CartContext";
import AboutPageWide02 from "../assets/AboutPageWide02.jpg";

const ListingsPage = () => {
  const [carListings, setCarListings] = useState([]);
  const { carList } = useCarList();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchCarListings();
  }, []);

  const fetchCarListings = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cars");
      setCarListings(response.data);
    } catch (error) {
      console.error("Error fetching car listings:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleEdit = (carId) => {
    navigate(`/edit/${carId}`);
  };

  const handleDelete = async (carId) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        await axios.delete(`http://localhost:3000/cars/${carId}`);
        setCarListings((prevListings) =>
          prevListings.filter((car) => car.id !== carId)
        );
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };

  const handleAddToCart = (carId) => {
    const carToAdd = carListings.find((car) => car.id === carId);
    if (carToAdd) {
      addToCart(carToAdd);
      console.log("Added to cart:", carToAdd);
      navigate("/cart");
    }
  };

  const handleAddCar = () => {
    navigate("/add-car");
  };

  const filteredListings = carListings.filter(
    (car) =>
      searchTerm === "" ||
      (car.make && car.make.toLowerCase().includes(searchTerm)) ||
      (car.model && car.model.toLowerCase().includes(searchTerm))
  );

  return (
    <div className="hero-container position-relative">
      <div className="position-absolute top-0 start-0 w-100 h-375px bg-black opacity-50"></div>
      <img
        src={AboutPageWide02}
        alt="Car Image"
        className="hero-image img-fluid w-100 h-50"
        style={{ objectFit: "cover" }}
      />
      <div
        className="overlay-content position-absolute top-0 start-50 translate-middle text-center"
        style={{
          zIndex: "1", // Set a higher z-index for the overlay content
          paddingTop: "200px",
          "@media (minWidth: 576px)": { paddingTop: "200px" },
        }}
      >
        <h1 className="main-heading" style={{ color: "white" }}>
          Car Listings
        </h1>
      </div>

      <div className="listings-page-container">
        <div
          className="d-flex justify-content-center align-items-center p-5 m-2"
          style={{ gap: "20px", zIndex: "2" }} // Set a higher z-index for the search bar container
        >
          <input
            type="text"
            placeholder="Search by make or model..."
            className="form-control-lg"
            style={{ width: "50%" }}
            onChange={handleSearchChange}
          />
          <button onClick={handleAddCar} className="btn-ae-primary">
            Add Car
          </button>
        </div>
        {/* Dark/Light Mode Switch */}
        <div
          className="form-check form-switch position-fixed bottom-0 end-0 m-4"
          style={{ zIndex: 999 }}
        >
          <input
            className="form-check-input p-2"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked
            onClick={myFunction}
          />
        </div>
        <div className="row w-100">
          {filteredListings.length > 0 ? (
            filteredListings.map((car) => (
              <div key={car.id} className="col">
                <div
                  className="card m-2 p-3 d-flex justify-content-center"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="card-img-top mx-auto" // Center the image horizontally
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <h5>
                    {car.make} {car.model}
                  </h5>
                  <p>Year: {car.year}</p>
                  <p>Price: ${car.price}</p>
                  <p>{car.description}</p>
                  <div className="col">
                    <button
                      className="m-2 pr-4 pl-4 btn btn-secondary"
                      onClick={() => handleEdit(car.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="m-2 btn btn-secondary"
                      onClick={() => handleDelete(car.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="m-2 btn btn-ae-primary"
                      onClick={() => handleAddToCart(car.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No car listings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
