import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


const NavBar = ({ isAuthenticated } ) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Implement signout logic here
    // For example, clear user session, token, or any relevant data
    // Then redirect the user to the login page or home page
   setIsAuthenticated(false); 
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="AutoExchange Logo"
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
            
            {isAuthenticated ? (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#" onClick={handleSignOut}>
                    Signout
                  </NavLink>
                </li>
              </React.Fragment>
            ) : (
              <React.Fragment>
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
              </React.Fragment>
            )}
            {/* Custom dropdown menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <NavLink className="dropdown-item" to="/listings">
                  Listings
                </NavLink>
                <NavLink className="dropdown-item" to="/about">
                  About
                  </NavLink>
                {isAuthenticated ? (
                  <React.Fragment>
                    <NavLink className="dropdown-item" to="#" onClick={handleSignOut}>
                      Signout
                    </NavLink>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <NavLink className="dropdown-item" to="/login">
                      Login
                    </NavLink>
                    <NavLink className="dropdown-item" to="/signup">
                      Signup
                    </NavLink>
                  </React.Fragment>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



