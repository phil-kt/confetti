import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
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
    video: PropTypes.bool

  }

  static defaultProps = {
    title: "",
    description: "",
    content: undefined,
    hero: "",
    heroAlt: "",
    video: false
  }

  render () {

    //TODO: Read time
    //Read time is based on the average reading speed of an adult (roughly 275 WPM). We take the total word count of a post and translate it into minutes. Then, we add 12 seconds for each inline image.

    return (
      <div className={"project-page container " + this.props.title}>
        <Navbar/>
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
              : <img className="hero-image" src={this.props.hero} alt={this.props.heroAlt}/>
            }
          </div>
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    )
  }

}

export default ProjectPage;