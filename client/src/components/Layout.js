import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Your hotbar goes here */}
      <header>
        {/* Hotbar content */}
        <Link to="/">
          <img
          src="../Vanillite_pfp.png"
          alt="Elliot Plagge"
          className="layout-image"
          />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/song">Song of the Week</Link>
        <Link to="/login">Login / Register</Link>
      </header>
      <div className="content-container">
        {children}
      </div>
    </div>
  );
}

export default Layout;