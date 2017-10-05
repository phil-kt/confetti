import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string,
    color: PropTypes.string.isRequired,
  }

  static defaultProps = {
    label: "Button",
    color: "green"
  }

  isLinkInternal () {
    if(this.props.link.indexOf("://") === -1)
      return true;

    return window.location.host === this.props.link.host;
  }

  render() {

    return (
      <div className={"button " + this.props.color}>

        {
          this.props.link ?
            (
              this.isLinkInternal() ?
              <Link to={this.props.link}>
                {this.props.label}
              </Link> :
              <a href={this.props.link} target="_blank">
                {this.props.label}
              </a>
            ) : <a>{this.props.label}</a>
        }
      </div>
    );
  }
}

export default Button;
