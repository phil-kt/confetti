import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Zoom } from 'react-reveal';
import './Callout.css';

class Callout extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    first: PropTypes.bool,
    middle: PropTypes.bool,
    delay: PropTypes.number,
    number: PropTypes.number,
    middleOffset: PropTypes.bool
  }

  static defaultProps = {
    image: "",
    altText: "#",
    title: "Test",
    description: "",
    first: false,
    middle: false,
    middleOffset: false,
    number: 3,
    delay: 0
  }

  render() {

    let layout = "";


    if(this.props.number === 2) {
      layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-4 col-md-4 col-lg-3 col-xl-3";
      this.props.first ? (layout += "col-sm-offset-2 col-md-offset-2 col-lg-offset-3 col-xl-offset-3") : (layout += " col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-xl-offset-0");
    }



    if(this.props.number === 3) {
      layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-4 col-lg-3 col-xl-3";
      this.props.first ? (layout += " col-lg-offset-1dot5 col-xl-offset-1dot5") : null;
      this.props.middle ? (layout += " col-md-offset-0") : null;
      !this.props.first || !this.props.middle ? (layout += " col-md-offset-0 col-lg-offset-0 col-xl-offset-0") : null;
    }

    if(this.props.number === 4) {
      layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-6 col-md-3 col-lg-2 col-xl-2";
      this.props.first ? (layout += " col-lg-offset-2 col-xl-offset-2") : (layout += " col-lg-offset-0 col-xl-offset-0");
    }

    if(this.props.number === 5) {
      layout = this.props.title + " callout col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-6 col-md-4 col-lg-2 col-xl-2";
      this.props.first ? (layout += " col-lg-offset-1 col-xl-offset-1") : null;
      this.props.middle ? (layout += " col-sm-offset-3 col-md-offset-0") : null;
      this.props.middleOffset ? (layout += " col-md-offset-2") : null;
      !this.props.first || !this.props.middle ? (layout += " col-md-offset-0 col-lg-offset-0 col-xl-offset-0") : null;
    }

    return (
      <Zoom delay={this.props.delay} className={layout}>
        <div className={"callout-image-container " + this.props.className}>
          <img src={this.props.image} alt={this.props.altText} />
        </div>
        <h5>{this.props.title}</h5>
        <p>
          {this.props.description}
        </p>
      </Zoom>
    );
  }
}

export default Callout;
