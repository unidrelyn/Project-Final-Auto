import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Car Marketplace Logo"
            className="home-page-logo"
            style={{ width: "150px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/listings">
                Listings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Custom dropdown menu */}
      <div
        className="dropdown-menu dropdown-menu-end position-absolute w-75"
        style={{ zIndex: "1000", top: "calc(100% + 10px)", right: "10px" }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/listings">
              Listings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
