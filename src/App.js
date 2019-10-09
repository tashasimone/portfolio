import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import "./App.css";
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
        <p>Notes: Menu uses Router to determine which Component to render. Therefore, all components from app.js render based on position. 
          going forward, individual components can render within others depending on need.
        </p>
      </div>

      <Footer />
      </div>
    );
  }
}

export default App;
