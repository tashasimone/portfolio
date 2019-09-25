import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './assets/logo.svg';
import './App.css';
// import Menu from './components/Menu.js';
import Home from './home/Home.js';
import Projects from './projects/Projects';
import About from './about/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' render={() => (
            <div className="App">
              <Home />
              </div>
          )}/>
          <Route path='/projects' render={() => (
            <div className="App">
              <Projects />
              </div>
          )}/>
          <Route path='/about' render={() => (
            <div className="App">
              <About />
              </div>
          )}/>
        </div>
      </Router>
      // <div className="App">
      //   <Menu />
      //   <Home />
      // </div>
    );
  }
}

export default App;
