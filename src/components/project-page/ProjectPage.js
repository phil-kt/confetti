import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Img from 'react-image';
import './ProjectPage.css';

import Video from '../video/Video';
import Navbar from '../navbar/Navbar';
import Project from '../project/Project';
import Projects from '../projects/Projects';

class ProjectPage extends Component {

  constructor(props) {
    super(props);

    const proj = new Projects();

    this.state = {
      nextProject: proj.getNextProject(props.title)
    };


    this.pStyle = "col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6";
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    hero: PropTypes.string.isRequired,
    heroAlt: PropTypes.string.isRequired,
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
    navbarColor: ""
  }

  render () {


    return (
      <div className={"project-page container " + this.props.title}>
        <Navbar nextProjectName={this.state.nextProject.name} nextProjectLink={this.state.nextProject.link} color={this.props.navbarColor}/>
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
              : <Img className="hero-image"
                     src={this.props.hero}
                     alt={this.props.heroAlt}
                     loader={<div className={"loader"}></div>}
              />
            }
          </div>
        </div>
        <div className="content" id="reading-content">
          {this.props.content}
        </div>

        <div className="row next-project">
          <h3 className={this.pStyle}>Next Project</h3>
        </div>

        <Project
          title={this.state.nextProject.name}
          description={this.state.nextProject.description}
          link={this.state.nextProject.link}
          image={this.state.nextProject.image}
          alt={this.state.nextProject.alt}
          color={this.state.nextProject.color}
          percentage={'0%'}/>

      </div>
    )
  }

}

export default ProjectPage;