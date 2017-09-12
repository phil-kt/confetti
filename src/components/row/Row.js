import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Row.css';

class Row extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired,
  }

  static defaultProps = {
    content: {},
  }

  render () {

    return (
      <div className="row">
        {this.props.content}
      </div>
    )
  }

}

export default Row;