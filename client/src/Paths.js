import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';
import Song from './components/Song.js';
import Projects from './components/Projects.js';
import Login from './components/Login.js';

const getPath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/song" element={<Song />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default getPath;