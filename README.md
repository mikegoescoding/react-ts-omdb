# Movie Search App

A React and TypeScript application to search for movies using the OMDB API.

## Features

-   Search for movies by title
-   View a list of movies from search results (with pagination where applicable)
-   Click on a movie to view more detailed information about it
-   Add and/or remove movies from your favorites list stored in local storage
-   Responsive design with Bootstrap styling

## Prerequisites

This assumes you have the following basic requirements to begin:

-   **Node.js** and **npm** installed on your machine
-   A text editor or IDE (e.g., VSCode)
-   An OMDB API key

## Installation

To install and run the application locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/mikegoescoding/movie-search-app.git
    cd react-ts-omdb

    ```

2. **Install Dependencies**: (axios, react-router-dom, bootstrap)

    ```bash
    npm install

    ```

3. **Create a .env file in the root directory**:

-   Add your OMDB API key to the .env file: VITE_OMDB_API_KEY=your_api_key_here

4. **Run the application**:

    ```bash
    npm run dev
    ```

---

**Notes:**

> **I challenged myself to go the TypeScript route and I feel overall it was successful and meets the requirements of the challenge. I mistakenly overlooked the landing page as I began and got myself into the weeds for a bit while I reworked the functionality. Given more time, I would refactor and refine each of the components as I know there are some opportunities to do so. I would also like to spend more time with the styling to refine, work out some responsive issues, adjust the pagination to reflect the exact style of the Figma file, and spend some more time with the MovieDetails cards. I wasn't 100% clear if the MovieDetails cards were meant to be modals or were just illustrated that way, but I do think that's a nice touch and would like to spend some more time with that as well.**

---

_Thanks,
Michael /@mikegoescoding_
