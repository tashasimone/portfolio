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
      console.log("collection constructed");
    }
  
    renderProject(project) {
      return <Projects key={project.key} title={project.title} type={project.type} year={project.year} programs={project.programs} client={project.client} fact={project.fact} img={project.img} />;
    }
  
    render() {
      var projects = this.state.projects;
      const limited = projects.filter(proj => 
        proj.key <= this.props.rangeMax && proj.key >= this.props.rangeMin
      );
      console.log(limited);
      // var projectSet = this.state.projects.reduce((mappedArray, project, project.key) => {
      //   if(project.key > 3) {
      //     mappedArray.push()
      //   }
      // } 
      // )

      // const setProjects = this.state.projects.slice(0, 3).map(
      //   (project) => <div>{project}</div>
      // )
      return (
        // <div className="Collection">
        //   {this.state.setProjects.map((project) =>
        //       this.renderProject(project)
        //   )}
        // </div> 
        //<div className="Collection">
        //   {items}
        //   <button onClick={this.handleShowMore}>
        //   Show more!
        // </button>
        // </div>

        <div className="Collection">
          {/* {this.state.projects.map((project) =>
              this.renderProject(project)
          )} */}
          {limited.map((project) => this.renderProject(project))}
        </div>
      );
    }
  }

  export default Collection;