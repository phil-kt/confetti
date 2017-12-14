import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Video.css';

class Video extends Component {

  componentWillReceiveProps(nextProps) {
    nextProps.autoplay ? this.playVideo() : this.stopVideo();
  }

  static propTypes = {
    autoplay: PropTypes.bool,
    webMsrc: PropTypes.string.isRequired,
    mp4src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    controls: PropTypes.bool
  }

  static defaultProps = {
    autoplay: false,
    webMsrc: "",
    mp4src: "",
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
        <video className={"video " + this.props.className} ref={(video) => { this._video = video; }} preload="meta" muted loop>

          <source src={this.props.webMsrc} type="video/webm" />
          <source src={this.props.mp4src} type="video/mp4" />

          <p>Your browser does not support the video tag. You can alternatively <a href={this.props.mp4src}>download</a> the video.</p>
        </video>
        {this.props.caption ?
          <p className={"caption"}>
            {this.props.caption}
          </p>
          : null
        }
      </span>
    )
  }

}

export default Video;