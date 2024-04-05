import React from "react";
import HeroWide from "../assets/HeroWide.jpg";
import "../App.css"; // Import CSS file for HomePage styling

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="hero-container position-relative">
        <img src={HeroWide} alt="Car Image" className="hero-image img-fluid" />
        <div
          className="overlay-content position-absolute top-0 start-50 translate-middle text-center"
          style={{
            paddingTop: "200px",
            "@media (min-width: 576px)": { paddingTop: "200px" },
          }}
        >
          <h1 className="main-heading mt-5 mb-4">Welcome to CarHub</h1>
          <p className="description">
            Discover your ideal car today or list your vehicle for sale with
            ease.
          </p>
          {/* Example of an engagement feature: a search bar */}
          <div className="search-bar-container d-flex justify-content-center">
            <input
              type="text"
              placeholder="Search for cars..."
              className="search-bar form-control"
            />
            <button className="search-button btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
