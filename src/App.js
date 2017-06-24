import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Ruston</h2>
        </div>
        <input>
        </input>
        <NavLink to={"/hello"}>Go</NavLink>
      </div>
    );
  }
}

export default App;
