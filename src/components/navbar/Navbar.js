import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import './Navbar.css';

class Navbar extends Component {

  constructor() {
    super();

    this.state = {
      visible: true
    }
  }

  static propTypes = {
    nextProjectLink: PropTypes.string.isRequired,
    nextProjectName: PropTypes.string.isRequired,
  }

  static defaultProps = {
    nextProjectLink: "/",
    nextProjectName: "Next Project"
  }


  render() {

    return (
      <Headroom
        onPin={() => console.log('pinned')}
        onUnpin={() => console.log('unpinned')}
      >
        <navbar className="navbar">
          <a href="/">Home</a>
          <a href="/">Next Project</a>
        </navbar>
      </Headroom>
    );
  }
}

export default Navbar;
