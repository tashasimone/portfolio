import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import Footer from './components/Footer';

// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './home/Home';
// import Projects from './projects/Projects';
// import About from './about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      <div>
        <p>hello world, coming from the app.js</p>
      </div>
        {/* <Router>
        <div>
          <Route exact path='/' render={() => (
            <div className="App">
              <Home />
              </div>
          )}/>
          <Route exact path='/home' render={() => (
            <div className="App">
              <Home />
              </div>
          )}/>
          <Route exact path='/projects' render={() => (
            <div className="App">
              <Projects />
              </div>
          )}/>
          <Route exact path='/about' render={() => (
            <div className="App">
              <About />
              </div>
          )}/>
        </div>
      </Router> */}

      <Footer />
      </div>
    );
  }
}

export default App;
