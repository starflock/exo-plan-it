import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to exoPlanIt
        </p>
        <button variant="primary">Reset</button>
        <button variant="primary">Create</button>
        <button variant="primary">View Solar System</button>
      </header>
    </div>
  );
}

export default App;
