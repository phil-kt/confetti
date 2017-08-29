import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.css';

import Button from '../button/Button';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: undefined,
    description: undefined,
    link: undefined,
    image: undefined,
    alt: undefined
  }
  render() {
    return (
      <div className="Project row">
        <img className="col-lg-offset-2 project-image col-lg-6" src={this.props.image} alt={this.props.alt}/>
        <div className="project-blurb col-lg-offset-5 col-lg-5">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <div className="bottom">
            <div className="stats"></div>
            <Button label="See Details" link="http://google.com"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
