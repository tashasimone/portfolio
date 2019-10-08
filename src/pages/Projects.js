import React, { Component } from 'react';
import Collection from '../components/Feed';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="collection-box">
            <h2>graphic designs</h2>
            <Collection filterType="graphic" getInfo={true} />
          </div>
          <div className="collection-box">
            <h2>interactive &amp; ux</h2>
            <Collection filterType="interactive" getInfo={true} />
          </div>
      </div>
    );
    }
}

export default Projects;