import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
import Other from '../other-work/Other-work';
import Links from '../links/Links';
import Resources from '../resources/Resources';

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