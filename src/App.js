import React from 'react';
import logo from './logo.svg';
import './App.css';

import ReorgJson from "./ReorgJson";

const App = () => {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <ReorgJson number = "50" />
    </div>
  );
};

export default App;
