import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectIcon.css';


class ProjectIcon extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: "",
    description: "",
    link: "",
    image: "",
    alt: "",
  }
  render() {

    return (
      <div className="project-icon col-lg-3">
        <img src={""} />
      </div>
    );
  }
}

export default ProjectIcon;
