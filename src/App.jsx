
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage"; // Import the SignupPage component
import EditCarForm from "./components/EditCarForm";
import { CarListProvider } from "./context/CarListContext";
import AddCarForm from "./components/AddCarForm";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import { AuthWrapper } from "./context/AuthContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  //console.log('Is authenticated:', isAuthenticated);
  return (
    <AuthWrapper>
    <CartProvider>
      <CarListProvider>
        <Router>
          <NavBar isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Add route for the signup page */}
            <Route
              path="/signup"
              element={<SignupPage setIsAuthenticated={setIsAuthenticated} />}
            />
            
            <Route path="/edit/:carId" element={<EditCarForm />} />
            < Route path="/add-car" element={<AddCarForm />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* Define other routes */}
            <Route path="/cart" element={<CartPage />} />{" "}
            {/* Define route for the cart page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </CarListProvider>

    </CartProvider>
    </AuthWrapper>
  );
}

export default App;


