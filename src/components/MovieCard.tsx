import React from "react";

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

const MovieCard: React.FC<MovieCardProps> = ({
    movie,
    onClick,
    onFavorite,
}) => {
    return (
        <div className="card mb-3" onClick={() => onClick(movie.imdbID)}>
            <img
                src={movie.Poster}
                className="card-img-top"
                alt={`${movie.Title} poster`}
            />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;

// The MovieCard component displays an individual movie's details.
// The card triggers an onClick event to view more details when clicked.
