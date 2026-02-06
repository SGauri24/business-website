import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg"; // Your logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Shree Ganesh HiTech Nursery" />
          <span>Shree Ganesh HiTech Nursery</span>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart 🛒</Link></li>
        </ul>

        {/* Theme toggle */}
        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
