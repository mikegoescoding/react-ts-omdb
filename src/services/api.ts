import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query: string, page: number = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}&s=${query}&page=${page}`);
        if (response.data.Response === "False") {
            throw new Error(response.data.Error);
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return { Search: [], totalResults: 0 }; // Return empty results in case of error
    }
};

export const getMovieDetails = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}&i=${id}`);
        if (response.data.Response === "False") {
            throw new Error(response.data.Error);
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return {}; // Return empty object in case of error
    }
};

// This file provides the functionality to communicate with the
// OMDB API and fetch movie data and details based on user input
