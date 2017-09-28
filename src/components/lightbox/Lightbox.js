import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import './Lightbox.css';

class MyLightbox extends Component {

  constructor () {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  static propTypes = {
    index: PropTypes.number.isRequired,
    open: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired
  }

  static defaultProps = {
    index: 0,
    open: PropTypes.bool.isRequired,
    images: []
  }

  componentWillReceiveProps(nextProps) {
    this.setState ({
      lightboxIsOpen: nextProps.open,
      currentImage: nextProps.index
    })
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }


  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }

  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }


  render () {

    return (
      <Lightbox
        images={this.props.images}
        currentImage={this.state.currentImage}
        isOpen={this.state.lightboxIsOpen}
        onClickImage={this.handleClickImage}
        onClickNext={this.gotoNext}
        onClickPrev={this.gotoPrevious}
        onClickThumbnail={this.gotoImage}
        onClose={this.closeLightbox}
        showThumbnails={this.props.showThumbnails}
        backdropClosesModal={true}
      />
    )
  }

}

export default MyLightbox;