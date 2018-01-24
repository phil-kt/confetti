import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Plx from 'react-plx';
import Isvg from 'react-inlinesvg';
import './Project.css';

import arrow from '../../media/icons/arrow-slim.svg';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    percentage: PropTypes.string,
    parallax: PropTypes.bool,
    endValue: PropTypes.number,
  }

  static defaultProps = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
    color: "",
    parallax: true,
    endValue: -100
  }

  render() {

    return (
      <div className={this.props.title + " Project"}>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-offset-0 col-lg-8 col-xl-offset-1 col-xl-7">
            <img className="project-image" src={this.props.image} alt={this.props.alt}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-10 col-md-offset-4 col-md-8 col-lg-offset-6 col-lg-6 col-xl-5">
            {this.props.parallax ?
              <Plx
                className="plx"
                animateWhenNotInViewport={true}
                parallaxData={[
                  {
                    start: this.props.percentage,
                    duration: this.props.parallax ? '9%' : "0%",
                    properties: [
                      {
                        startValue: 0,
                        endValue: this.props.endValue,
                        property: 'translateY',
                        unit: "px"
                      },
                      {
                        startValue: 0,
                        endValue: 1,
                        property: 'opacity',
                      }
                    ]
                  }
                ]}
              >
              <Link className="project-link-container" to={this.props.link}>
                <div className={"project-blurb " + this.props.color}>
                  <h2>{this.props.title}</h2>
                  <p>{this.props.description}</p>
                  <div className="bottom">
                    {/*
                    <Button label="Case Study" link={this.props.link} color={this.props.color}/>
                    */}
                    <div className={"next navbar-link " + this.props.color}>
                      <Link to={this.props.link}>Case Study</Link>
                      <Isvg className={"next-arrow"} src={arrow} />
                    </div>
                  </div>
                </div>
              </Link>
              </Plx> :

              <Link className="project-link-container" to={this.props.link}>
                <div className="project-blurb">
                  <h2>{this.props.title}</h2>
                  <p>{this.props.description}</p>
                  <div className="bottom">
                    {/*
                  <Button label="Case Study" link={this.props.link} color={this.props.color}/>
                  */}
                    <div className={"next navbar-link " + this.props.color}>
                      <Link to={this.props.link}>Case Study</Link>
                      <Isvg className={"next-arrow"} src={arrow} />
                    </div>
                  </div>
                </div>
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
