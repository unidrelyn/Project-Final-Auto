import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarList } from "../context/CarListContext";
import axios from "axios";
import HeroWide from "../assets/HeroWide.jpg";

const ListingsPage = () => {
  const [carListings, setCarListings] = useState([]);
  const { carList } = useCarList();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    // Logic for adding to cart
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

  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="home-page-container">
      <div className="hero-container position-relative">
        <img src={HeroWide} alt="Car Image" className="hero-image img-fluid" />
        <div
          className="overlay-content position-absolute top-0 start-50 translate-middle text-center"
          style={{
            paddingTop: "200px",
            "@media (minWidth: 576px)": { paddingTop: "200px" },
          }}
        >
          <h1 className="main-heading mt-5 mb-4" style={{ color: "white" }}>
            Welcome to AutoExchange
          </h1>
          <p className="description" style={{ color: "white" }}>
            Discover your ideal car today or list your vehicle for sale with
            ease.
          </p>
        </div>
      </div>

      <div className="listings-page-container">
        <div
          className="d-flex justify-content-center align-items-center p-5 m-2"
          style={{ gap: "20px", zIndex: "2" }} // Set a higher z-index for the search bar container
        >
          <h1 className="text">Recommended for you</h1>
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
        <div className="row w-100 d-flex justify-content-start">
          {filteredListings.length > 0 ? (
            filteredListings.map((car) => (
              <div key={car.id} className="col d-flex justify-content-start">
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
                      borderRadius: "4px",
                    }}
                  />
                  <h5>
                    {car.brand && capitalizeFirstLetter(car.brand)}{" "}
                    {car.model && capitalizeFirstLetter(car.model)}
                  </h5>
                  <div className="col text-left">
                    <p>Year: {car.year}</p>
                    <p>Price: {car.price}</p>
                    <p>
                      Color: {car.color && capitalizeFirstLetter(car.color)}
                    </p>
                  </div>
                  <div className="col">
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
