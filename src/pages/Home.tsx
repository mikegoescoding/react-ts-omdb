import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { searchMovies } from "../services/api";

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

const Home: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(location.search);
        const searchQuery = urlSearchParams.get("search");

        if (searchQuery) {
            handleSearch(searchQuery);
        } else {
            setMovies([]);
            setTotalResults(0);
            setError("Please enter a search query.");
        }
    }, [location.search]);

    const handleSearch = async (searchQuery: string) => {
        setQuery(searchQuery);
        try {
            const data = await searchMovies(searchQuery, 1);

            if (data.Search.length === 0) {
                throw new Error("No movies found. Try another search!");
            }

            setMovies(data.Search || []);
            setPage(1);
            setTotalResults(data.totalResults || 0);
            setError(null);
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "An unknown error occurred.";
            setMovies([]);
            setTotalResults(0);
            setError(errorMessage);
        }
    };

    const handlePageChange = async (newPage: number) => {
        try {
            const data = await searchMovies(query, newPage);

            if (data.Search.length === 0) {
                throw new Error("No movies found.");
            }

            setMovies(data.Search || []);
            setPage(newPage);
            setError(null);
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "An unknown error occurred.";
            setError(errorMessage);
        }
    };

    const handleMovieClick = (id: string) => {
        navigate(`/search-results/movie/${id}`);
    };

    const handleFavorite = (movie: any) => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        localStorage.setItem(
            "favorites",
            JSON.stringify([...favorites, movie])
        );
    };

    return (
        <div className="container homepage-movie-container">
            {error && <div className="alert alert-danger">{error}</div>}
            {movies.length > 0 ? (
                <>
                    <MovieList
                        movies={movies}
                        onMovieClick={handleMovieClick}
                        onFavorite={handleFavorite}
                    />
                    <Pagination
                        currentPage={page}
                        totalResults={totalResults}
                        resultsPerPage={10} // 10 results per page for 5x2 grid
                        onPageChange={handlePageChange}
                    />
                </>
            ) : (
                !error && (
                    <div className="alert alert-info">
                        No results available. Please enter a search query.
                    </div>
                )
            )}
        </div>
    );
};

export default Home;
