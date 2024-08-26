import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Favorites from "./Favorites";
import "../styles/SearchResults.css"; // Custom CSS for SearchResults

const SearchResults: React.FC = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("search") || "";

    return (
        <>
            <Navbar searchQuery={query} />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </>
    );
};

export default SearchResults;
