import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectStats.css';

class ProjectStats extends Component {

  static propTypes = {
    team: PropTypes.array.isRequired,
    responsibilities: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired,
  }

  static defaultProps = {
    team: undefined,
    responsibilities: undefined,
    time: undefined
  }

  render() {

    return (
      <div className="row stats">
        <div className="col-xs-4 col-sm-4 col-md-offset-1 col-md-3 col-lg-offset-2dot5 col-lg-2dot3 col-xl-offset-3 col-xl-2">
          <h4>Team</h4>
          <ul>
            {(this.props.team).map(function (teammate, index){
              return (
                <li key={"teammate" + index}>{teammate}</li>
              )
            })}
          </ul>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2dot3 col-xl-2">
          <h4>Time Frame</h4>
          <ul><li>{this.props.time}</li></ul>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2dot3 col-xl-2">
          <h4>My Role</h4>
          <ul>
            {(this.props.responsibilities).map(function (role, index){
              return (
                <li key={"role" + index}>{role}</li>
              )
            })}
          </ul>
        </div>

      </div>
    );
  }
}

export default ProjectStats;
