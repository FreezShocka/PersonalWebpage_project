// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default Paths;