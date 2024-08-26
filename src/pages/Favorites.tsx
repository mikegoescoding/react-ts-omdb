import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoritesList from "../components/FavoritesList";
import { Movie } from "../types/types";

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedFavorites = JSON.parse(
            localStorage.getItem("favorites") || "[]"
        );
        setFavorites(storedFavorites);
    }, []);

    const handleRemoveFavorite = (id: string) => {
        const updatedFavorites = favorites.filter(
            (movie) => movie.imdbID !== id
        );
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const handleMovieClick = (id: string) => {
        navigate(`/search-results/movie/${id}`); // Navigate to movie details page
    };

    return (
        <div className="container">
            <h2>Your Favorite Movies</h2>
            <FavoritesList
                favorites={favorites}
                onRemoveFavorite={handleRemoveFavorite}
                onMovieClick={handleMovieClick} // Pass handler to FavoritesList
            />
        </div>
    );
};

export default Favorites;

// This component manages and displays the user's favorite movies using local storage.
// It retrieves the list from local storage and allows the user to remove
// movies from the favorites list. The list is rendered by using the
// FavoritesList component.
