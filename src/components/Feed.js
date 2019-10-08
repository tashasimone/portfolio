import React, { Component } from 'react';
import *as Data from '../data/collection';

class Projects extends Component {
    render() {
      if(this.props.info === true) {
        return (
          <div className="Project">
          <img src={require(`../images/${this.props.img}.jpg`)} className="Project-cover" alt="placeholder" width="400px" />
            <h3 className="Project-title">{this.props.title}</h3>
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
      else {
        return (
          <div className="Project">
          <img src={require(`../images/${this.props.img}.jpg`)} className="Project-cover" alt="placeholder" width="400px" />
            <h2 className="Project-title">{this.props.title}</h2>
          </div>
        );
      }
    }
  }
  
  class Collection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        projects: Data.projects
      };
      console.log("collection constructed");
    }
  
    renderProject(project) {
      return <Projects info={this.props.getInfo} key={project.key} title={project.title} type={project.type} year={project.year} programs={project.programs} client={project.client} fact={project.fact} img={project.img} />;
    }
  
    render() {
      var projects = this.state.projects;
      var limited = projects;
      if (this.props.filterType === "graphic"){
        limited = projects.filter(proj => 
          proj.type === "graphic"
        );
      }
      else if (this.props.filterType === "interactive"){
        limited = projects.filter(proj => 
          proj.type === "interactive"
        );
      }
      else if (this.props.rangeMax != null && this.props.rangeMin != null){
        limited = projects.filter(proj => 
          proj.key <= this.props.rangeMax && proj.key >= this.props.rangeMin
        );
      }
      else {
        limited = projects;
      }

      console.log(limited);
 
      return (
        <div className="Collection">
         
          {limited.map((project) => this.renderProject(project))}
        </div>
      );
    }
  }

  export default Collection;