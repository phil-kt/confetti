import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Img from 'react-image';
import './ProjectPage.css';

import Video from '../video/Video';
import Navbar from '../navbar/Navbar';

class ProjectPage extends Component {

  constructor() {
    super();

    this.pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    hero: PropTypes.string.isRequired,
    heroAlt: PropTypes.string.isRequired,
    nextProjectName: PropTypes.string.isRequired,
    nextProjectLink: PropTypes.string.isRequired,
    video: PropTypes.bool,
    navbarColor: PropTypes.string
  }

  static defaultProps = {
    title: "",
    description: "",
    content: undefined,
    hero: "",
    heroAlt: "",
    video: false,
    nextProjectName: "Next Page",
    nextProjectLink: "/",
    navbarColor: ""
  }

  render () {

    return (
      <div className={"project-page container " + this.props.title}>
        <Navbar nextProjectName={this.props.nextProjectName} nextProjectLink={this.props.nextProjectLink} color={this.props.navbarColor}/>
        <div className="header row">
          <h1 className={this.pStyle}>{this.props.title}</h1>
        </div>
        <div className="row subtitle">
          <p className={this.pStyle}>{this.props.description}</p>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12 col-xl-12">
            {this.props.video ?
              <VisibilitySensor>
                {({isVisible}) =>
                  <div>
                    <Video
                      autoplay={isVisible}
                      src={this.props.hero}
                      caption={null}/>
                  </div>
                }
              </VisibilitySensor>
              : <Img className="hero-image" src={this.props.hero} alt={this.props.heroAlt}/>
            }
          </div>
        </div>
        <div className="content" id="reading-content">
          {this.props.content}
        </div>
      </div>
    )
  }

}

export default ProjectPage;