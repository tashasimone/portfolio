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
          <h1>I identify as a designer, creator, lover, learner, but most of all, an individual.</h1>
          {/* <Collection rangeMin='3' rangeMax='3' getInfo={false} /> */}
          <p>I grew up living in suburbia, but travelling the world and dreaming of a life outside of a concrete jungle. 
            So I went to college in the cornfields of Ohio, and after graduating ended up back in suburbia, but 6 hours north of where I grew up.
            I've always been a curious creative, from planning to bottle the sap from the hideout tree to sell it as glue to narrating
             my own cooking show while experimenting in the kitchen. When I was 10 years old I joined a forum for young horseback riders, and 
             quickly got into the world of photo manipulation and creating banners for member's post signatures in Picnik and GIMP. 
             In high school I finally got Adobe Creative Suite 6 and took a class in Graphic Design, before abandoning the trade to pursue a B.S. in
             Computer Science. My freshman year of college I realized I mostly cared about designing interfaces, not low-level algorithmic programming, 
             and since I was at risk of losing my academic scholarship I dropped my physics class and switched to pursuing a B.A. in Visual Communication Design, 
             concentrating in interactive Web Design.  </p>
        </div>

        <div className="section-2">
          <h2>featured projects</h2>
          <Collection rangeMin='0' rangeMax='2' getInfo={false} />
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
            <Collection filterType="graphic" getInfo={true} />
            <p><a href="">see all >></a></p>
            <img src="https://via.placeholder.com/200x120" alt="blank placeholder"></img>
          </div>
          <div className="collection-box">
            <h2>interactive &amp; ux</h2>
            <Collection filterType="interactive" getInfo={true} />
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