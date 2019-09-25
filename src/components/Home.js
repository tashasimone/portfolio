import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
    <div className="Home">
      <main>
        <div class="hero-header">
          <img src="https://via.placeholder.com/700x340" alt="blank placeholder"></img>
        </div>
        <div class="section-1">
          <h1>headline one</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut cursus efficitur dolor, sit amet volutpat est. Quisque massa nisi, 
            iaculis pellentesque turpis eu, pellentesque aliquam sapien. In auctor 
            faucibus augue. Maecenas tincidunt est nec mattis iaculis. In blandit 
            dui a mollis ornare. Sed tempor justo nec diam auctor mattis.</p>
        </div>

        <div class="section-2">
          <h2>section head</h2>
          <div class="project-preview">
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
            <h3>project title</h3>
          </div>
          <div class="project-preview">
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
            <h3>project title</h3>
          </div>
          <div class="project-preview">
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
            <h3>project title</h3>
          </div>
        </div>

        <div class="section-3">
          <div class="collection-box">
            <h2>graphic designs</h2>
            <p><a href="">see all >></a></p>
            <img src="https://via.placeholder.com/200x120" alt="blank placeholder"></img>
          </div>
          <div class="collection-box">
            <h2>interactive &amp; ux</h2>
            <p><a href="">see all >></a></p>
            <img src="https://via.placeholder.com/160" alt="blank placeholder"></img>
          </div>
        </div>

        <div class="section-4">
          <h2>section head</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut cursus efficitur dolor, sit amet volutpat est. Quisque massa nisi, 
            iaculis pellentesque turpis eu, pellentesque aliquam sapien. In auctor 
            faucibus augue. Maecenas tincidunt est nec mattis iaculis. In blandit 
            dui a mollis ornare. Sed tempor justo nec diam auctor mattis.
            <a href=""></a></p>
        </div>

        <div class="section-5">
          <h2>section head</h2>
          <div class="social-feed">
            <img src="https://via.placeholder.com/340" alt="blank placeholder"></img>
          </div>
          <div class="social-feed">
            <img src="https://via.placeholder.com/340" alt="blank placeholder"></img>
          </div>
        </div>

      </main>
      </div>
    );
}
}
  
export default Home;