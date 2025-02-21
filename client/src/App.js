// import React, { useEffect, useState } from 'react'
// import Routes from './Paths';

// const App = () => {
//   return (
//     <div>
//       <Routes />
//     </div>
//   );

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

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Choose a port for your backend

app.use(cors());
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});