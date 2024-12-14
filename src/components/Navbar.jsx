import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

// Navbar Component
const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/add-product">Add Product</Link>
  </nav>
);

export default Navbar;