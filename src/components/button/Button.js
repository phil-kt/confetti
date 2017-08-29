import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  static defaultProps = {
    label: undefined,
    link: undefined
  }

  isLinkInternal () {
    if(this.props.link.indexOf("://")=== -1)
      return true;

    return window.location.host === this.props.link.host;
  }

  render() {
    return (
      <div className="button">
        {this.isLinkInternal() ?
          <a href={this.props.link}>
            {this.props.label}
          </a> :
          <a href={this.props.link} target="_blank">
            {this.props.label}
          </a>
        }
      </div>
    );
  }
}

export default Button;
