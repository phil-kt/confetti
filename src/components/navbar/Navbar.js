import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
      <Headroom>
        <navbar className="navbar">
          <Link to="/">Home</Link>
          <Link to={this.props.nextProjectLink}>{this.props.nextProjectName}</Link>
        </navbar>
      </Headroom>
    );
  }
}

export default Navbar;
