import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="gap">
          <h2>The Countdown:</h2>
        </div>
        <h2 class="gap" id="app"></h2>
      </header>
    </div>
  );
}

export default App;
