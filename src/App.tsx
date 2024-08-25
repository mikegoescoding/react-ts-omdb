import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component

const App: React.FC = () => {
    return (
        <Router>
            <Navbar /> {/* Include Navbar at the top of the application */}
        </Router>
    );
};

export default App;
