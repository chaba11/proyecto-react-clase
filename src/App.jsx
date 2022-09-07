/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputWithName from './InputWithName';
import MyButton from './components/MyButton/MyButton';

function App() {
  const [contador, setContador] = useState(0);
  function handleClick() {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputWithName />
        <MyButton contador={contador} handleClick={handleClick} />
        <p>
          Hola Mundo!
        </p>
        {process.env.NODE_ENV}
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
