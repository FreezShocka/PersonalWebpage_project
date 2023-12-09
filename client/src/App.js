import React, { useEffect, useState } from 'react'
import Routes from './Paths';

const App = () => {
  return (
    <div>
      <Routes />
    </div>
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