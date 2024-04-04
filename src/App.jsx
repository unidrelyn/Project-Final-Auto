// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar'; // Correctly imported NavBar
// import HomePage from './pages/HomePage';
// import ListingsPage from './pages/ListingsPage';
// import AboutPage from './pages/AboutPage';
// import LoginPage from './pages/LoginPage';
// import './App.css';
// //import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <NavBar /> {/* NavBar included to show on all pages */}
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/listings" element={<ListingsPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         {/* Define other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; // Import the SignupPage component
import EditCarForm from './components/EditCarForm';
import { CarListProvider } from './context/CarListContext';
import AddCarForm from './components/AddCarForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CarListProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Add route for the signup page */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/edit/:carId" element={<EditCarForm />} /> {/* Define the edit route */}
        <Route path="/add-car" element={<AddCarForm />} />
        {/* Define other routes */}
      </Routes>
    </Router>
    </CarListProvider>
  );
  
}

export default App;