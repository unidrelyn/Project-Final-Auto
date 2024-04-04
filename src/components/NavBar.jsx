// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

// const NavBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     // Implement search functionality
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">Home</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/listings">Listings</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/login">Login</NavLink>
//             </li>
//           </ul>
//           {/* Search input and button */}
//           <form className="d-flex">
//             <input 
//               className="form-control me-2" 
//               type="search" 
//               placeholder="Search..." 
//               aria-label="Search"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Navigate to a search results page, passing the search term as a query parameter
    navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    setSearchTerm(''); // Optionally clear the search input after submission
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/listings">Listings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Signup</NavLink>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search..." 
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;