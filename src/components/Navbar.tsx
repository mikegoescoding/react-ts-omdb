import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container nav-container">
                <Link
                    className="navbar-brand logo"
                    to="/"
                    title="Go to Home Page"
                >
                    <img
                        src="src/images/peachflix-logo.png"
                        alt="Peachflix Logo"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                title="Go to Home Page"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/favorites"
                                title="Go to Favorites Page"
                            >
                                Favorites
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// Navbar component: brand/logo, navigation links to the Home and Favorites pages.
// Takes advantage of Bootstrap classes to style and structure the navigation bar.
