import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieFetcher: React.FC = () => {
    const [movieTitle, setMovieTitle] = useState<string>("");
    const [movieData, setMovieData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchMovieData = async () => {
        try {
            const response = await axios.get(
                `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`
            );
            if (response.data.Response === "True") {
                setMovieData(response.data);
                setError(null);
            } else {
                setMovieData(null);
                setError(response.data.Error);
            }
        } catch (err) {
            setMovieData(null);
            setError("Error fetching movie data");
        }
    };

    useEffect(() => {
        if (movieTitle) {
            fetchMovieData();
        }
    }, [movieTitle]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter movie title"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <button onClick={fetchMovieData}>Fetch Movie</button>

            {error && <p>{error}</p>}
            {movieData && movieData.Response === "True" && (
                <div>
                    <h2>{movieData.Title}</h2>
                    <p>{movieData.Plot}</p>
                    <img src={movieData.Poster} alt={movieData.Title} />
                </div>
            )}
        </div>
    );
};

export default MovieFetcher;
