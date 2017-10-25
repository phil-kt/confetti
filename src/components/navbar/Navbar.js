import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import ReadingProgress from 'react-reading-progress';
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
    color: PropTypes.string
  }

  static defaultProps = {
    nextProjectLink: "/",
    nextProjectName: "Next Project",
    color: ""
  }


  render() {

    return (
      <div className="nav">
        <ReadingProgress className={"progress-bar " + this.props.color} />
        <Headroom>
          <div>
          <navbar className="navbar">
            <Link to="/">Home</Link>
            <Link to={this.props.nextProjectLink}>{this.props.nextProjectName}</Link>
          </navbar>
          </div>
        </Headroom>
      </div>
    );
  }
}

export default Navbar;
