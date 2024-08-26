import React from "react";
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
    return (
        <div className="card mb-3 border-0 bg-grey">
            <img
                src={movie.Poster}
                className="card-img-top"
                alt={`${movie.Title} poster`}
                onClick={() => onClick(movie.imdbID)}
            />
        </div>
    );
};

export default MovieCard;

// The MovieCard component displays an individual movie's details.
// The card triggers an onClick event to view more details when clicked.
