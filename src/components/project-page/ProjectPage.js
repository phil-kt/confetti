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
    title: undefined,
    description: undefined,
    content: undefined,
    hero: undefined,
    heroAlt: undefined
  }

  render () {

    return (
      <div className={"project-page " + this.props.title}>
        <div className="header row">
          <h1 className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8">{this.props.title}</h1>
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