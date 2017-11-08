import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import Modal from 'react-responsive-modal';
import Img from 'react-image';
import './ProjectIcon.css';


class ProjectIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      imageLoaded: false
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    square: PropTypes.bool,
    round: PropTypes.bool,
    links: PropTypes.array,
    first: PropTypes.bool,
  }

  static defaultProps = {
    title: "",
    description: "",
    link: "",
    svg: "",
    alt: "",
    image: null,
    square: false,
    round: false,
    links: [],
    first: false
  }

  showModal() {
    this.setState({ modalOpen: true });
  }


  handleImageLoaded() {
    this.setState({
      imageLoaded: true,
      modalOpen: true
    });
  }


  hideModal() {
    this.setState({ modalOpen: false });
  }

  render() {

    let square = this.props.square ? "square" : null;
    let round = this.props.round ? "round" : null;

    let displayModal="none";
    this.state.imageLoaded === true ? displayModal = "block" : displayModal = "none";

    const modalCustomStyles = {
      height: 'auto',
      width: '80vw',
      maxWidth: "400px",
      margin: "auto",
      display: displayModal
  }

    let iconClass = "project-icon col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-2";
    this.props.first ? iconClass += " col-xl-offset-2" : null;

    return (
      <div className={iconClass}>
        <span onClick={this.showModal}>
        <Isvg src={this.props.svg} alt={this.props.alt} className={square || round}/>
        </span>
        <Modal
          open={this.state.modalOpen}
          onClose={this.hideModal}
          modalStyle={modalCustomStyles}>
          <div>
            <h2>{this.props.title}</h2>
            <div className="modal-content">
              {this.props.description}
              <Img src={this.props.image} alt={this.props.alt} onLoad={this.handleImageLoaded}/>
              <p>
              {
                (this.props.links).map(function (link, index){
                  return (
                    <a key={link.title + "link" + index} href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                  )
                })
              }
              </p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectIcon;
