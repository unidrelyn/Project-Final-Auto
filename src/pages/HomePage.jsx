import React from "react";
import HeroWide from "../assets/HeroWide.jpg";
import "../App.css"; // Import CSS file for HomePage styling
import logo from "../assets/388FF278-AF38-42EB-9D93-034B2580752F.png"; // Adjust the path as needed

const HomePage = () => {
  return (
    <div className="home-page-container ">
      <div className="hero-container position-relative">
        <img src={HeroWide} alt="Car Image" className="hero-image img-fluid" />
        <div
          className="overlay-content position-absolute top-0 start-50 translate-middle text-center"
          style={{
            paddingTop: "200px",
            "@media (minWidth: 576px)": { paddingTop: "200px" },
          }}
        >
          <h1 className="main-heading mt-5 mb-4">Welcome to AutoExchange</h1>
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

      {/* Placeholder containers for cards */}
      <h4 className="mt-3 mb-3">Recommended for you</h4>
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ height: "360px" }}>
              <div className="card-body placeholder-box"></div>
            </div>
          </div>
        </div>
      </div>

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
};

export default HomePage;
