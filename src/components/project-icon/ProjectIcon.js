import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import Rodal from 'rodal';
import './ProjectIcon.css';
import 'rodal/lib/rodal.css';


class ProjectIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    square: PropTypes.bool,
    round: PropTypes.bool
  }

  static defaultProps = {
    title: "",
    description: "",
    link: "",
    svg: "",
    alt: "",
    square: false,
    round: false
  }

  showModal() {
    this.setState({ modalOpen: true });
    console.log("show");
    document.body.style.overflow = "hidden";
  }

  hideModal() {
    this.setState({ modalOpen: false });
    document.body.style.overflow = "auto";
  }

  render() {

    let square = this.props.square ? "square" : null;
    let round = this.props.round ? "round" : null;

    return (
      <div className="project-icon col-lg-3">
        <span onClick={this.showModal}>
        <Isvg src={this.props.svg} alt={this.props.alt} className={square || round}/>
        </span>
        <Rodal visible={this.state.modalOpen} onClose={this.hideModal}>
          <div>
            <h2>{this.props.title}</h2>
            <p className="modal-content">
              {this.props.description}
            </p>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default ProjectIcon;
