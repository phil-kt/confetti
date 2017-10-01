import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProjectSection.css';

class ProjectSection extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  }

  static defaultProps = {
    title: undefined,
    content: undefined,
  }

  render () {

    return (
      <div className={"project-section"}>
        <div className="row">
          <h3 className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-2dot5 col-lg-7 col-xl-offset-3 col-xl-6">{this.props.title}</h3>
        </div>
        <div className="project-section-content">
          {this.props.content}
        </div>
      </div>
    )
  }

}

export default ProjectSection;