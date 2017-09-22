import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Video.css';

class Video extends Component {

  componentWillReceiveProps(nextProps) {
    nextProps.autoplay ? this.playVideo() : this.stopVideo();
  }

  static propTypes = {
    autoplay: PropTypes.bool,
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    controls: PropTypes.bool
  }

  static defaultProps = {
    autoplay: false,
    src: "",
    caption: "",
    controls: false
  }

  playVideo = () => {
    this._video.play();
  }

  stopVideo = () => {
    this._video.pause();
  }

  render () {

    return (
      <span>
        <video className={"video"} ref={(video) => { this._video = video; }} src={this.props.src} loop>
          Your browser does not support the video tag. You can alternatively <a href={this.props.src}>download</a> the video.
        </video>
        <p className={"caption"}>
          {this.props.caption}
        </p>
      </span>
    )
  }

}

export default Video;