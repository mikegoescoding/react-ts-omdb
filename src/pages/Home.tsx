import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
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
    const [isSearchMode, setIsSearchMode] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchRandomMovies = async () => {
            try {
                const keywords = [
                    "action",
                    "comedy",
                    "drama",
                    "thriller",
                    "sci-fi",
                ];
                const randomKeyword =
                    keywords[Math.floor(Math.random() * keywords.length)];
                const data = await searchMovies(randomKeyword, 1);

                if (data.Search.length === 0) {
                    throw new Error("No movies found. Try another search!");
                }

                const allMovies = data.Search;
                const shuffledMovies = allMovies.sort(
                    () => 0.5 - Math.random()
                );
                const randomMovies = shuffledMovies.slice(0, 9); // Select 9 random movies for 3x3 grid

                setMovies(randomMovies);
                setTotalResults(data.totalResults || 0);
                setIsSearchMode(false);
                setError(null);
            } catch (err) {
                // Check if `err` is an instance of Error
                const errorMessage =
                    err instanceof Error
                        ? err.message
                        : "An unknown error occurred.";
                setError(errorMessage);
            }
        };

        fetchRandomMovies();
    }, []);

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
            setIsSearchMode(true);
            setError(null);
        } catch (err) {
            // Check if `err` is an instance of Error
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "An unknown error occurred.";
            setError(errorMessage);
        }
    };

    const handlePageChange = async (newPage: number) => {
        try {
            const data = await searchMovies(query || "action", newPage);

            if (data.Search.length === 0) {
                throw new Error("No movies found.");
            }

            setMovies(data.Search || []);
            setPage(newPage);
            setError(null);
        } catch (err) {
            // Check if `err` is an instance of Error
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "An unknown error occurred.";
            setError(errorMessage);
        }
    };

    const handleMovieClick = (id: string) => {
        navigate(`/movie/${id}`);
    };

    const handleFavorite = (movie: any) => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        localStorage.setItem(
            "favorites",
            JSON.stringify([...favorites, movie])
        );
    };

    return (
        <div className="container">
            <SearchBar onSearch={handleSearch} />
            {error && <div className="alert alert-danger">{error}</div>}
            <MovieList
                movies={movies}
                onMovieClick={handleMovieClick}
                onFavorite={handleFavorite}
            />
            {isSearchMode && movies.length > 0 && (
                <Pagination
                    currentPage={page}
                    totalResults={totalResults}
                    resultsPerPage={10} // 9 results per page for 3x3 grid
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default Home;
