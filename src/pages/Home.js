import React, { Component } from 'react';
import Collection from '../components/Feed';
import Blog from '../components/BlogFeed';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <main>
        <div className="hero-header">
          <img src="https://via.placeholder.com/700x340" alt="blank placeholder"></img>
        </div>
        <div className="section-1">
          <h1>headline one</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut cursus efficitur dolor, sit amet volutpat est. Quisque massa nisi, 
            iaculis pellentesque turpis eu, pellentesque aliquam sapien. In auctor 
            faucibus augue. Maecenas tincidunt est nec mattis iaculis. In blandit 
            dui a mollis ornare. Sed tempor justo nec diam auctor mattis.</p>
        </div>

        <div className="section-2">
          <h2>section head</h2>
          <Collection rangeMin='1' rangeMax='4'/>
          <div className="project-preview">
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
            <h3>project title</h3>
          </div>
          <div className="project-preview">
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
            <h3>project title</h3>
          </div>
          <div className="project-preview">
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
            <h3>project title</h3>
          </div>
        </div>

        <div className="section-3">
          <div className="collection-box">
            <h2>graphic designs</h2>
            <p><a href="">see all >></a></p>
            <img src="https://via.placeholder.com/200x120" alt="blank placeholder"></img>
          </div>
          <div className="collection-box">
            <h2>interactive &amp; ux</h2>
            <p><a href="">see all >></a></p>
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
          </div>
        </div>

        <div className="section-4">
          <h2>section head</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut cursus efficitur dolor, sit amet volutpat est. Quisque massa nisi, 
            iaculis pellentesque turpis eu, pellentesque aliquam sapien. In auctor 
            faucibus augue. Maecenas tincidunt est nec mattis iaculis. In blandit 
            dui a mollis ornare. Sed tempor justo nec diam auctor mattis.
            <a href=""></a></p>
            <Blog />
        </div>

        <div className="section-5">
          <h2>section head</h2>
          <div className="social-feed">
            <img src="https://via.placeholder.com/340" alt="blank placeholder"></img>
          </div>
          <div className="social-feed">
            <img src="https://via.placeholder.com/340" alt="blank placeholder"></img>
          </div>
        </div>

      </main>
      </div>
    );
}
}


export default Home;