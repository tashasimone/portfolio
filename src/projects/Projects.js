import React, { Component } from 'react';
import Menu from '../components/Menu';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
      <Menu />
      <div id='container'>
            <a href="../home">Home</a>
            <a href="../about" >About Me</a>
      </div>  
      </div>
    )
    }
}

export default Projects;