import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar component
import Home from "./pages/Home"; // Home page

const App: React.FC = () => {
    return (
        <Router>
            <Navbar /> {/* Include Navbar at the top of the application */}
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
