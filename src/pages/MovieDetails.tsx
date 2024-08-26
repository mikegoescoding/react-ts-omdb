import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MovieDetails.css"; // Custom CSS for MovieDetails

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [alertType, setAlertType] = useState<"success" | "warning">(
        "success"
    );

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (id) {
                const data = await getMovieDetails(id);
                setMovie(data);
            }
        };
        fetchMovieDetails();
    }, [id]);

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

        setTimeout(() => setAlertMessage(null), 3000);
    };

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-details-wrapper">
            <div
                className="movie-details-background shadow"
                style={{ backgroundImage: `url(${movie.Poster})` }}
            >
                <div className="movie-details-overlay"></div>
                <div className="movie-details-info">
                    <h1 className="movie-details-title">{movie.Title}</h1>
                    <p className="movie-details-description">{movie.Plot}</p>
                    <p>
                        <strong>Duration:</strong> {movie.Runtime}
                    </p>
                    <p>
                        <strong>Rating:</strong> {movie.Rated}
                    </p>
                    <p>
                        <strong>Cast:</strong> {movie.Actors}
                    </p>
                    <p>
                        <strong>Genre:</strong> {movie.Genre}
                    </p>
                    <div className="movie-details-button-group">
                        <button
                            className="btn back-to-search-btn me-3"
                            onClick={() => window.history.back()}
                        >
                            Back to Search
                        </button>
                        <button
                            className="btn btn-outline-light"
                            onClick={() => handleFavorite(movie)}
                        >
                            Add to Favorites
                        </button>
                        <a
                            className="go-to-favorites-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            onClick={() =>
                                navigate("/search-results/favorites")
                            }
                        >
                            Go to Favorites
                        </a>
                    </div>

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
        </div>
    );
};

export default MovieDetails;
