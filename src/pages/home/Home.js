import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="intro row">
          <h3 className="col-lg-4">Good morning, I'm</h3>
          <h1 className="col-lg-12">Philippe Kimura-Thollander</h1>
          <div className="col-lg-6">
            <p>
              A user experience designer passionate about making technology delightful, intuitive, and accessible to everyone. (Especially in the realm of emoji, virtual reality , and augmented reality).
            </p>
            <p>
              Scroll down to see some highlighted projects, or get an overall sense by reading my resume.
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
