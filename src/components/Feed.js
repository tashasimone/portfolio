import React, { Component } from 'react';
import *as Data from '../data/collection';

class Projects extends Component {
    render() {
      return (
        <div className="Project">
        <img src={require(`../images/${this.props.img}.jpg`)} className="Project-cover" alt="placeholder" width="400px" />
          <h2 className="Project-title">{this.props.title}</h2>
          <ul className="Project-info">
            <li className="Project-type">Type: {this.props.type}</li>
            <li className="Project-year">Year: {this.props.year}</li>
            <li className="Project-programs">Programs: {this.props.programs}</li>
            <li className="Project-client">Client: {this.props.client}</li>
            <li className="Project-fact">Fact: {this.props.fact}</li>
          </ul>
        </div>
      );
    }
  }
  
  class Collection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: Data.projects
      };
      console.log(Data.projects);
    }
  
    renderProject(project) {
      return <Projects key={project.title} title={project.title} type={project.type} year={project.year} programs={project.programs} client={project.client} fact={project.fact} img={project.img} />;
    }
  
    render() {
      return (
        <div className="Collection">
          {this.state.projects.map((project) =>
              this.renderProject(project)
          )}
        </div>
      );
    }
  }

  export default Collection;