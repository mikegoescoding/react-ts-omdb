import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface MovieCardProps {
    movie: {
        Title: string;
        Year: string;
        Poster: string;
        imdbID: string;
    };
    onClick: (id: string) => void;
    onFavorite: (movie: any) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<"success" | "warning">(
        "success"
    );

    // Function to handle adding the movie to favorites
    const handleFavorite = (movie: any) => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const isAlreadyFavorite = favorites.some(
            (fav: any) => fav.imdbID === movie.imdbID
        );

        if (!isAlreadyFavorite) {
            localStorage.setItem(
                "favorites",
                JSON.stringify([...favorites, movie])
            );
            setAlertMessage(`${movie.Title} has been added to your favorites.`);
            setAlertType("success");
        } else {
            setAlertMessage(`${movie.Title} is already in your favorites.`);
            setAlertType("warning");
        }

        // Clear the alert message after 3 seconds
        setTimeout(() => setAlertMessage(null), 3000);
    };

    return (
        <div className="card mb-3">
            <img
                src={movie.Poster}
                className="card-img-top"
                alt={`${movie.Title} poster`}
                onClick={() => onClick(movie.imdbID)}
            />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                <button
                    className="btn btn-outline-secondary"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFavorite(movie);
                    }}
                >
                    Add to Favorites
                </button>
                {alertMessage && (
                    <div
                        className={`alert alert-${alertType} mt-3`}
                        role="alert"
                    >
                        {alertMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieCard;

// The MovieCard component displays an individual movie's details.
// Favorites button for adding the movie to a user's favorites list.
// The card triggers an onClick event to view more details when clicked.
