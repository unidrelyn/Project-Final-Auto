import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCarList } from "../context/CarListContext";
import axios from "axios";
import HeroWide from "../assets/HeroWide.jpg";
import { useCart } from "../context/CartContext"; // Import useCart hook
import { API_URL } from "../config";

const HomePage = () => {
  const [carListings, setCarListings] = useState([]);
  const { carList } = useCarList();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use addToCart function from useCart hook

  useEffect(() => {
    fetchCarListings();
  }, []);

  const fetchCarListings = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/cars`);
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
        await axios.delete(`${API_URL}/api/cars/${carId}`);
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
      addToCart(carToAdd); // Add car to cart
      navigate("/cart"); // Navigate to cart page
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
      <div
        className="align-items-center p-5 m-2"
        style={{ gap: "20px", zIndex: "2" }}
      >
        <h1 className="text">Recommended for you</h1> <br />
      </div>
      <div className="listings-page-container w-100 ">
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
              <div key={car._id} className="col  mb-4 ">
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

                  <div className="col d-flex flex-end h-100">
                    <button
                      className="m-2 btn btn-ae-primary d-flex flex-end justify-content-left button-fixed-height"
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

export default HomePage;
