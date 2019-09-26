import React, { Component } from 'react';
import *as Data from '../data/blog';

  class Posts extends Component {
    render() {
      return (
        <div className="Post">
        {/* <img src={require(`../assets/${this.props.img}.jpg`)} className="Post-cover" alt="placeholder" width="400px" /> */}
          <h2 className="Post-title">{this.props.title}</h2>
          <ul className="Post-info">
            <li className="Post-category">Category: {this.props.category}</li>
            <li className="Post-year">Year: {this.props.year}</li>
            <li className="Post-author">Author: {this.props.author}</li>
            <li className="Post-content">Content: {this.props.content}</li>
          </ul>
        </div>
      );
    }
  }
  
  class Blog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: Data.posts
      };
      console.log(Data.posts);
    }
  
    renderPost(post) {
      return <Posts key={post.title} title={post.title} category={post.category} year={post.year} author={post.author} content={post.content}/>;
    }
  
    render() {
      return (
        <div className="Collection">
          {this.state.posts.map((post) =>
              this.renderPost(post)
          )}
        </div>
      );
    }
  }

  export default Blog;