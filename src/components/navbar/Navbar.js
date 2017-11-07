import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import ReadingProgress from 'react-reading-progress';
import './Navbar.css';
import Isvg from 'react-inlinesvg';

import arrow from '../../media/icons/arrow.svg';

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
            <Link className="navbar-link" to="/">Home</Link>
            <div className="next navbar-link">
              <Link to={this.props.nextProjectLink}>{this.props.nextProjectName}</Link>
              <Isvg className={"next-arrow"} src={arrow} />
            </div>
          </navbar>
          </div>
        </Headroom>
      </div>
    );
  }
}

export default Navbar;
