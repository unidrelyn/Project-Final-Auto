import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react"; // Import useContext
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import Button from "react-bootstrap/Button";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const NavBar = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [showSign, setShowSign] = useState(false);

	const navigate = useNavigate();
	const { handleLogout, isLoggedIn } = useContext(AuthContext); // Use AuthContext
	const signOut = async () => {
		await handleLogout(); // Call your logout function from AuthContext
		navigate("/"); // Redirect to home page after logout
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
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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

						{isLoggedIn ? (
							// If logged in, show Signout option
							<li className="nav-item">
								<button
									className="nav-link btn btn-link"
									onClick={signOut}
									style={{ color: "rgba(255,255,255,.55)" }}
								>
									Signout
								</button>
							</li>
						) : (
							// If not logged in, show Login and Signup options
							<>
								<li className="nav-item">
									<Button
										className="nav-link"
										variant="outline-link"
										onClick={() => setShowLogin(true)}
									>
										Login
									</Button>
								</li>
								<li className="nav-item">
									<Button
										className="nav-link"
										variant="outline-link"
										onClick={() => setShowSign(true)}
									>
										Signup
									</Button>
								</li>
							</>
						)}
					</ul>
				</div>
				{showLogin ? (
					<LoginPage showLogin={showLogin} setShowLogin={setShowLogin} />
				) : null}
				{showSign ? (
					<SignupPage showSign={showSign} setShowSign={setShowSign} />
				) : null}
			</div>
		</nav>
	);
};

/* <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/signup">Signup</NavLink>
    </li>
  */

export default NavBar;
