
import React from 'react';
import logo from '../assets/388FF278-AF38-42EB-9D93-034B2580752F.png'; // Adjust the path as needed

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="logo-container">
        <img src={logo} alt="Car Marketplace Logo" className="home-page-logo" />
      </div>

      <h1 className="main-heading">Welcome to CarHub</h1>
      <p className="description">Discover your ideal car today or list your vehicle for sale with ease.</p>

      {/* Example of an engagement feature: a search bar */}
      <div className="search-bar-container">
        <input type="text" placeholder="Search for cars..." className="search-bar"/>
        <button className="search-button">Search</button>
      </div>

      {/* Additional content such as featured listings or testimonials can be added here */}
    </div>
  );
};

export default HomePage;