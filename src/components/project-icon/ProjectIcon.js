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

    const rodalCustomStyles = {
      height: 'auto',
      maxHeight: '80%',
      bottom: 'auto',
      overflow: 'scroll',
      top: '50%',
      transform: 'translateY(-50%)'
    }

    let iconClass = "project-icon col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-2";
    this.props.first ? iconClass += " col-xl-offset-2" : null;

    return (
      <div className={iconClass}>
        <span onClick={this.showModal}>
        <Isvg src={this.props.svg} alt={this.props.alt} className={square || round}/>
        </span>
        <Rodal visible={this.state.modalOpen} onClose={this.hideModal} customStyles={rodalCustomStyles}>
          <div>
            <h2>{this.props.title}</h2>
            <div className="modal-content">
              {this.props.description}
              <img src={this.props.image} alt={this.props.alt}/>
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
        </Rodal>
      </div>
    );
  }
}

export default ProjectIcon;
