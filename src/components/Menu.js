import React, { Component } from 'react';
import logo from '../assets/logo.svg';

class Menu extends Component {
  render() {
    return (
    <div className="Menu">
      <nav>
        <div className="Menu-logo">
          <a href="index.js"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Design Portfolio</a></li>
          <li><a href="">Creative Works</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Where to Find Me</a></li>
          <li><a href="">Resources</a></li>
        </ul>
      </nav>
      </div>
    );
}
}
  
export default Menu;