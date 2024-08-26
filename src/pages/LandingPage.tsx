import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css"; // Custom CSS for LandingPage

const LandingPage: React.FC = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query.trim()) {
            navigate(`/search-results/?search=${query}`);
        }
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <div className="landing-page landing-page-wrapper">
            <div className="container landing-page-container">
                <div className="brand-logo">
                    <img
                        src="../src/images/peachflix-logo.png"
                        alt="Peachflix Logo"
                    />
                </div>
                <div className="search-container mt-3">
                    <button
                        className="btn-dark btn-sm form-control-sm"
                        onClick={handleSearch}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 14 14"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                    <input
                        type="text"
                        className="form-control-sm"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyPress} // Handle 'Enter' key press
                        placeholder="Search..."
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
