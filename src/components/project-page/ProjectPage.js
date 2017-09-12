import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProjectPage.css';

class ProjectPage extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    hero: PropTypes.string.isRequired,
    heroAlt: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: "",
    description: "",
    content: undefined,
    hero: "",
    heroAlt: ""
  }

  render () {

    //TODO: Read time
    //Read time is based on the average reading speed of an adult (roughly 275 WPM). We take the total word count of a post and translate it into minutes. Then, we add 12 seconds for each inline image.

    return (
      <div className={"project-page container " + this.props.title}>
        <div className="header row">
          <h1 className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 col-xl-offset-3 col-xl-6">{this.props.title}</h1>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12 col-xl-12">
            <img className="hero-image" src={this.props.hero} alt={this.props.heroAlt}/>
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