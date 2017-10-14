import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {

  static propTypes = {
    nextProjectLink: PropTypes.string.isRequired,
    nextProjectName: PropTypes.string.isRequired
  }

  static defaultProps = {
    nextProjectLink: "/",
    nextProjectName: "Next Project"
  }


  render() {

    return (
      <navbar className="navbar">
        <a href="/">Home</a>
        <a href="/">Next Project</a>
      </navbar>
    );
  }
}

export default Navbar;
