import React from "react";
import { Movie } from "../types/types";

interface FavoritesListProps {
    favorites: Movie[];
    onRemoveFavorite: (id: string) => void;
    onMovieClick: (id: string) => void; // clicking poster in favs list will navigate to details page for that movie
}

const FavoritesList: React.FC<FavoritesListProps> = ({
    favorites,
    onRemoveFavorite,
    onMovieClick,
}) => {
    return (
        <div className="row">
            {favorites.length === 0 ? (
                <div className="col-12">
                    <div className="alert alert-info text-center" role="alert">
                        You have no favorite movies yet. Start adding some!
                    </div>
                </div>
            ) : (
                favorites.map((movie) => (
                    <div key={movie.imdbID} className="col-md-3 mb-3">
                        <div className="card">
                            <img
                                src={movie.Poster}
                                alt={`${movie.Title} poster`}
                                className="card-img-top"
                                onClick={() => onMovieClick(movie.imdbID)} // Handle click on poster
                                style={{ cursor: "pointer" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.Title}</h5>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        onRemoveFavorite(movie.imdbID)
                                    }
                                >
                                    Remove from Favorites
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default FavoritesList;

// The FavoritesList component renders only a user's "favorited" movies. It includes a button to remove a movie
// from the favorites list if desired. Show a message if no movies are favorited.
