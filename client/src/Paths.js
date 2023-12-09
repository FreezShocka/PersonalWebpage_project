import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Song from './Song';
import Projects from './Projects';
import Login from './Login';

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/song" component={Song} />
        <Route path="/projects" component={Projects} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  );
}

export default Paths;