import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Callout.css';

class Callout extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    first: PropTypes.bool,
    middle: PropTypes.bool
  }

  static defaultProps = {
    image: "",
    altText: "#",
    title: "Test",
    description: "",
    first: false,
    middle: false
  }

  render() {

    let layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-4 col-lg-3 col-xl-3";
    this.props.first ? (layout += " col-lg-offset-1dot5 col-xl-offset-1dot5") : null;
    this.props.middle ? (layout += " col-md-offset-0") : null;
    !this.props.first || !this.props.middle ? (layout += " col-md-offset-0 col-lg-offset-0 col-xl-offset-0") : null;

    return (
      <div className={layout}>
        <div>
          <img src={this.props.image} alt={this.props.altText} />
        </div>
        <h4>{this.props.title}</h4>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Callout;
