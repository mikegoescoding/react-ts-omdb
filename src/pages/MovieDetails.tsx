import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<any>(null);
    const navigate = useNavigate(); // Initialize useNavigate
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

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <em className="badge rounded-pill bg-light text-dark">
                ::/src/pages/MovieDetails.tsx/
            </em>
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={movie.Poster}
                        alt={`${movie.Title} poster`}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-8">
                    <h2>{movie.Title}</h2>
                    <p>
                        <strong>Year:</strong> {movie.Year}
                    </p>
                    <p>
                        <strong>Genre:</strong> {movie.Genre}
                    </p>
                    <p>
                        <strong>Director:</strong> {movie.Director}
                    </p>
                    <p>
                        <strong>Plot:</strong> {movie.Plot}
                    </p>
                    <p>
                        <strong>Actors:</strong> {movie.Actors}
                    </p>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => window.history.back()}
                    >
                        Back to Search
                    </button>
                    {/* New "Go to Favorites" Button */}
                    <button
                        className="btn btn-secondary me-2"
                        onClick={() => navigate("/favorites")} // Navigate to Favorites page
                    >
                        Go to Favorites
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleFavorite(movie)}
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
        </div>
    );
};

export default MovieDetails;
