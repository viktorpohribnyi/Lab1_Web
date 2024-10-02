import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Debug from "./components/Debug";
import './App.css';

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/categories">Categories</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<Categories />} />
          </Routes>
          <Debug />
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;

