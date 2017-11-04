import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Plx from 'react-plx';
import './Project.css';

import Button from '../button/Button';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    percentage: PropTypes.string
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
      <div className={this.props.title + " Project"}>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-offset-2 col-lg-6">

            <Plx
              parallaxData={[
                {
                  start: this.props.percentage,
                  duration: '10%',
                  properties: [
                    {
                      startValue: 0,
                      endValue: 0,
                      property: 'translateY',
                      unit: '%'
                    }
                  ]
                }
              ]}
            >
            <Link className="project-link-container" to={this.props.link}>
            <img className="project-image" src={this.props.image} alt={this.props.alt}/>
            </Link>
            </Plx>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-offset-4 col-sm-8 col-md-offset-4 col-md-7 col-lg-offset-5 col-lg-5 ">
            <Plx
              parallaxData={[
                {
                  start: this.props.percentage,
                  duration: '10%',
                  properties: [
                    {
                      startValue: 0,
                      endValue: -150,
                      property: 'translateY',
                    }
                  ]
                }
              ]}
            >
            <Link className="project-link-container" to={this.props.link}>
              <div className="project-blurb">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <div className="bottom">
                  <Button label="Case Study" link={this.props.link} color={this.props.color}/>
                </div>
              </div>
            </Link>
            </Plx>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
