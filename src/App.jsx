import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://random-data-api.com/api/users/random_user');
      setName(response.data.first_name);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
        <p>
          Hola Mundo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
