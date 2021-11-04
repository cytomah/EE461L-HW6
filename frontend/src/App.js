import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Content from  './components/content.js'
 
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
    <Content/>
    </div>
  );
}
 
export default App;
