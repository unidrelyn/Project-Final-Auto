import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarList } from "../context/CarListContext";
import axios from "axios";
import CarListing from "../components/CarListing";
import { useCart } from "../context/CartContext";
import AboutPageWide02 from "../assets/AboutPageWide02.jpg";
import AddCarForm from "../components/AddCarForm";

import Button from "react-bootstrap/Button";
import { API_URL } from "../config";

const ListingsPage = () => {
  //states
  const [carListings, setCarListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const [idIndex, setIdIndex] = useState(0);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { carList } = useCarList();

  useEffect(() => {
    fetchCarListings();
  }, []);

  const fetchCarListings = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/cars`);
      setCarListings(response.data);
      setIdIndex(response.data.length);
    } catch (error) {
      console.error("Error fetching car listings:", error);
    }
  };

  const handleAddToCart = (carId) => {
    const carToAdd = carListings.find(
      (car) => car._id === carId || car.id === carId
    ); // Adjusted to handle either _id or id
    if (carToAdd) {
      addToCart(carToAdd);
      console.log("Added to cart:", carToAdd);
      navigate("/checkout");
      // Show a toast or modal here instead of immediate navigation
      // Example: showToast("Car added to cart!");
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
        await axios.delete(`${API_URL}/api/cars/${carId}`);
        setCarListings((prevListings) =>
          prevListings.filter((car) => car.id !== carId)
        );
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };

  const filteredListings = carListings.filter(
    (car) =>
      searchTerm === "" ||
      (car.brand && car.brand.toLowerCase().includes(searchTerm)) ||
      (car.model && car.model.toLowerCase().includes(searchTerm))
  );
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
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
        <h1 className="main-heading">Car Listings</h1>
      </div>

      <div className="listings-page-container">
        <div
          className="d-flex justify-content-center align-items-center p-5 m-2"
          style={{ gap: "20px", zIndex: "2" }} // Set a higher z-index for the search bar container
        >
          <input
            type="text"
            placeholder="Search by make or model..."
            className="search-bar"
            onChange={handleSearchChange}
          />
          <Button
            onClick={() => setShow(true)}
            className="primary-button"
            variant="primary"
          >
            Sell Your Car
          </Button>
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
        <div className="row w-100 ">
          {filteredListings.length > 0 ? (
            filteredListings.map((car) => (
              <div key={car._id} className="col  mb-4">
                <div className="card m-2 p-0" style={{ width: "18rem" }}>
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="card-img-top mx-auto"
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      margin: "0 auto",
                      padding: "0",
                    }}
                  />
                  <h4 className="mt-2 text-left w-100 p-2">
                    {car.brand && capitalizeFirstLetter(car.brand)}
                    <br />
                    {car.model && capitalizeFirstLetter(car.model)}
                  </h4>
                  <div className="col text-left  flex-grow-1 h-100">
                    {" "}
                    <ul style={{ listStyleType: "disc", textAlign: "left" }}>
                      {" "}
                      <li>Year: {car.year}</li>
                      <li>Price: {car.price}</li>
                      <li>
                        Color: {car.color && capitalizeFirstLetter(car.color)}
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <button
                      className="m-2 pr-4 pl-4 btn btn-secondary"
                      onClick={() => handleEdit(car._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="m-2 btn btn-secondary"
                      onClick={() => handleDelete(car._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="m-2 btn btn-primary"
                      style={{
                        backgroundColor: "#7749F8",
                        color: "white",
                        borderColor: "#59359A",
                      }}
                      onClick={() => handleAddToCart(car._id)}
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
      {show ? (
        <AddCarForm
          show={show}
          setShow={setShow}
          idIndex={idIndex}
          fetchCarListings={fetchCarListings}
        />
      ) : null}
    </div>
  );
};

export default ListingsPage;
