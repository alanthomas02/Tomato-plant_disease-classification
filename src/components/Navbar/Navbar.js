// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for Navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <Link to="/" className="navbar-brand">
          {/* Your logo */}
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/prediction" className="nav-link">Prediction</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link"></Link>
          </li>
          {/* Add more navigation items based on your needs */}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
