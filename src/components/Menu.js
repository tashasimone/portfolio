import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Router } from "@reach/router";
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Other from '../pages/Other-work';
import Links from '../pages/Links';
import Resources from '../pages/Resources';

class Menu extends Component {
  render() {
    return (
    <div className="Menu">
      <nav>
        <div className="Menu-logo">
          <a href="/about"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div id='container'>
            <ul>
                <li><a href="../">Home</a></li>
                <li><a href="../projects">Design Portfolio</a></li>
                <li><a href="../other-work">Creative Works</a></li>
                <li><a href="../about">About Me</a></li>
                <li><a href="../links">Where to Find Me</a></li>
                <li><a href="../resources">Resources</a></li>
            </ul>
        </div>
        
        <Router>
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
            <Route exact path='/other-work' render={() => (
                <div className="App">
                <Other />
                </div>
            )}/>
            <Route exact path='/about' render={() => (
                <div className="App">
                <About />
                </div>
            )}/>
            <Route exact path='/links' render={() => (
                <div className="App">
                <Links />
                </div>
            )}/>
            <Route exact path='/resources' render={() => (
                <div className="App">
                <Resources />
                </div>
            )}/>
            </div>
        </Router>
      </nav>
      </div>
    );
}
}
  
export default Menu;