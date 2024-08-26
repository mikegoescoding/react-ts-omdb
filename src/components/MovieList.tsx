import React from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
    movies: any[];
    onMovieClick: (id: string) => void;
    onFavorite: (movie: any) => void;
}

const MovieList: React.FC<MovieListProps> = ({
    movies,
    onMovieClick,
    onFavorite,
}) => {
    return (
        <div className="row">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="five-four-two-col-row ">
                    <MovieCard
                        movie={movie}
                        onClick={onMovieClick}
                        onFavorite={onFavorite}
                    />
                </div>
            ))}
        </div>
    );
};

export default MovieList;

// MovieList component receives an array of movies and maps over it,
// rendering a MovieCard for each movie. It passes down the necessary
// props for handling clicks and favorites.
