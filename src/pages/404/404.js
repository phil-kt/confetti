import React, { Component } from 'react';
import './404.css';

class PageNotFound extends Component {

  render() {

    return (
      <div className="PageNotFound container">
        <a href="/">You're somewhere you don't belong.</a>
      </div>
    );
  }
}

export default PageNotFound;
