import React from "react";
import { Link } from "react-router-dom";
import AboutPageWide from "../assets/AboutPageWide.jpg";

const NotFoundPage = () => {
  return (
    <div className="404-page-container vh-100">
      <div className="404-container position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

        <img
          src={AboutPageWide}
          alt="Car Image"
          className="hero-image img-fluid w-100 h-100 "
          style={{ objectFit: "cover" }}
        />
        <div
          className="overlay-content position-absolute top-0 start-50 translate-middle text-center"
          style={{
            paddingTop: "200px",
          }}
        >
          <h1 className="text" style={{ color: "white" }}>
            404 Wrong Detour
          </h1>
        </div>
      </div>

      {/* Use Link component from react-router-dom for navigation */}
      <Link to="/listings">
        <button className="m-4 btn btn-ae-primary">Return to Listings</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
