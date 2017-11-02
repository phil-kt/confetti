import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Project.css';

import Button from '../button/Button';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    color: ""
  }

  render() {

    return (
      <Fade bottom fraaction={.4} className={this.props.title + " Project"}>
        <span>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-offset-2 col-lg-6">
            <Link className="project-link-container" to={this.props.link}>
            <img className="project-image" src={this.props.image} alt={this.props.alt}/>
            </Link>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-12 col-sm-offset-4 col-sm-8 col-md-offset-4 col-md-7 col-lg-offset-5 col-lg-5 ">
          <Link className="project-link-container" to={this.props.link}>
            <div className="project-blurb">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
              <div className="bottom">
                <div className="stats"></div>
                <Button label="Case Study" link={this.props.link} color={this.props.color}/>
              </div>
            </div>
          </Link>
        </div>
        </div>
        </span>
      </Fade>
    );
  }
}

export default Project;
