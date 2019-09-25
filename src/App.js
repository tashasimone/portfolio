import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
