import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import Modal from 'react-modal';
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
  };

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
  };

  showModal() {
    this.setState({ modalOpen: true });
    document.body.style.overflow = "hidden";
  }

  hideModal() {
    this.setState({ modalOpen: false });
    document.body.style.overflow = "auto";
  }

  render() {

    let square = this.props.square ? "square" : null;
    let round = this.props.round ? "round" : null;
    let modalVisible = "hidden";
    this.state.imageLoaded ? modalVisible = "visible" : null;

    const modalCustomStyles = {

      overlay : {
        overflowY: "scroll",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
      },
      content: {
        height: 'auto',
        position: 'relative',
        padding: '1em',
        width: '80vw',
        maxWidth: "400px",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        border: "none",
        margin: "10vh auto",
        visibility: modalVisible
      }
    }

    let iconClass = "project-icon col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-2";
    this.props.first ? iconClass += " col-xl-offset-2" : null;

    return (
      <div className={iconClass}>
        <span onClick={this.showModal}>
        <Isvg src={this.props.svg} alt={this.props.alt} className={square || round}/>
        </span>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.hideModal}
          closeTimeoutMS={200}
          style={modalCustomStyles}
          contentLabel="Modal">
          <div>
            <h2>{this.props.title}</h2>
            <div className="modal-content">
              {this.props.description}
              <Img src={this.props.image} alt={this.props.alt} onLoad={() => this.setState({imageLoaded: true})} loader={<div className={"loader"}></div> }/>
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
