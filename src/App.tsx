import React from "react";
import MovieFetcher from "./services/apiTesting";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>OMDB API Test</h1>
            <MovieFetcher />
        </div>
    );
};

export default App;
