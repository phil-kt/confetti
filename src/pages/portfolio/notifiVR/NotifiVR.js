import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotifiVR.css';

import Button from '../../../components/button/Button';
import PortfolioPage from '../../../components/portfolio-page/PortfolioPage';

class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  static defaultProps = {
    title: undefined,
    description: undefined,
    link: undefined,
    image: undefined,
    alt: undefined,
    color: undefined
  }
  render() {

    return (
      <div className="NotifiVR container">
        <PortfolioPage
          title={"NotifiVR"}

        />
      </div>
    );
  }
}

export default Project;
