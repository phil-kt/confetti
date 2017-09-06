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
          <h3 className="col-xs-12 col-sm-12 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10 col-xl-offset-2 col-xl-8">{this.props.title}</h3>
        </div>
        <div className="row">
          {this.props.content}
        </div>
      </div>
    )
  }

}

export default ProjectSection;