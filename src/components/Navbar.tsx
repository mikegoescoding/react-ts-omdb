import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar"; // Import the SearchBar component

interface NavbarProps {
    searchQuery?: string; // Add searchQuery prop
}

const Navbar: React.FC<NavbarProps> = ({ searchQuery = "" }) => {
    const navigate = useNavigate();

    const handleSearch = (query: string) => {
        if (query.trim()) {
            navigate(`/search-results/?search=${query}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-grey navbar-dark">
            <div className="container nav-container">
                <Link
                    className="navbar-brand logo"
                    to="/"
                    title="Go to Home Page"
                >
                    <img
                        src="../src/images/peachflix-logo.png"
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
                    <ul className="navbar-nav ms-auto">
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
                                to="/search-results/favorites"
                                title="Go to Favorites Page"
                            >
                                Favorites
                            </Link>
                        </li>
                    </ul>
                    <div className="ms-lg-3">
                        {/* Pass the searchQuery prop */}
                        <SearchBar
                            onSearch={handleSearch}
                            defaultValue={searchQuery} // Set the default value
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
