import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Process.css';


import clock from '../../media/icons/clock.svg';
import hat from '../../media/icons/hat.svg';
import team from '../../media/icons/team.svg';

import first from '../../media/icons/first.svg';
import middle from '../../media/icons/middle.svg';
import last from '../../media/icons/last.svg';

class Process extends Component {

  static propTypes = {
    team: PropTypes.string.isRequired,
    duty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired
  }

  static defaultProps = {
    team: undefined,
    duty: undefined,
    time: undefined,
    steps: undefined
  }

  render() {

    let stepsLength = this.props.steps.length;

    return (
      <span className="Process">
        <ul className="timeline">
          {(this.props.steps).map(function (step, index){

              return (
                <span className="step">
                  <div className="time">
                    <img
                      src={index === 0 ? first :
                        (index === stepsLength - 1 ? last
                        : middle)}
                      alt={index + " step"}
                    />
                  </div>
                  <li key={index} className="step-details">
                    <h4 className="step-header">{step.title}</h4>
                    <ul className="step-info">
                    {(step.processes).map(function (process, index){
                      return <li>{process}</li>
                    })}
                    </ul>
                  </li>
                </span>
              )

          })}
        </ul>
        {/*
        <div className="stats">
          <div className="stat">
            <img src={team} alt="Team"/>
            <span>{this.props.team}</span>
          </div>
          <div className="stat">
            <img src={hat} alt="Hats"/>
            <span>{this.props.duty}</span>
          </div>
          <div className="stat">
            <img src={clock} alt="Clock"/>
            <span>{this.props.time}</span>
          </div>
        </div>
          */}

      </span>
    );
  }
}

export default Process;
