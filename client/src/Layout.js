import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your hotbar goes here */}
      <header>
        {/* Hotbar content */}
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/song">Song of the Week</Link>
        <Link to="/login">Login / Register</Link>
      </header>
      {/* Page content */}
      {children}
    </div>
  );
}

export default Layout;