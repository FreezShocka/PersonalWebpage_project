import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Song from './components/Song.js';
import Projects from './components/Projects.js';
import Login from './components/Login.js';
import paths from './Paths.js';
import Layout from './components/Layout.js'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.about} element={<About />} />
          <Route path={paths.song} element={<Song />} />
          <Route path={paths.projects} element={<Projects />} />
          <Route path={paths.login} element={<Login />} />
       </Routes>
      </Layout>
    </Router>
  );

  // const [backendData, setBackEndData] = useState ([{}])
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackEndData(data)
  //     }
  //   )
  // }, [])
  // return (
  //   <div>

  //     {(typeof backendData.users === 'undefined') ? (
  //       <p>Loading...</p>
  //     ): (
  //       backendData.users.map((user, i) =>(
  //         <p key={i}>{user}</p>
  //       ))
  //     )}

  //   </div>
  // )
}

export default App;
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 5000; // Choose a port for your backend

// app.use(cors());
// app.use(bodyParser.json());

// // Example route
// app.get('/', (req, res) => {
//   res.send('Server is running!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });