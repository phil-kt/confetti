import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './PortfolioPage.css';

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
          <h1 className="col-lg-offset-1 col-lg-10">{this.props.title}</h1>
        </div>
        <div className="row">
        <img className="col-lg-12" src={this.props.hero} alt={this.props.heroAlt}/>
        </div>
        <div className="content row">
          {this.props.content}
        </div>
      </div>
    )
  }

}

export default ProjectPage;