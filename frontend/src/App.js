import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Content from  './Components/Name.js'

function App() {
  const [getLastName, setLastName] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setLastName(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div>
    <h3>
      Last Name Finder
    </h3>
    <div>{getLastName.status === 200 ? <h3>{getLastName.data.message}</h3>: <h3>Switch</h3>}</div>
    <Content/>
    </div>
  );
}

export default App;