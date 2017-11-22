import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Row.css';

class Row extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    content: {},
    className: ""
  }

  render () {

    return (
      <div className={this.props.className + " row"}>
        {this.props.content}
      </div>
    )
  }

}

export default Row;