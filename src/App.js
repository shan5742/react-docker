import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Dockerized!!!</p>
        <a
          className="App-link"
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Docker
        </a>
      </header>
    </div>
  );
}

export default App;
