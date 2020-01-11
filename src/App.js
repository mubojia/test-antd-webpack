import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';
import AppA from './AppA';
import AppB from './AppB';
import AppC from './AppC';
import AppD from './AppD';
import AppE from './AppE';
import AppF from './AppF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DatePicker />
          Learn React
          <AppA />
          <AppB />
          <AppC />
          <AppD />
          <AppE />
          <AppF />
        </a>
      </header>
    </div>
  );
}

export default App;
