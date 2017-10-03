import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryPolarAxis, VictoryArea, VictoryTheme } from 'victory';
import theme from '../chart-theme/ChartTheme';
import './PolarChart.css';


class PolarChart extends Component {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  static defaultProps = {
    data: null,
  }

  render() {
    return (
      <span className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <VictoryChart polar theme={theme} domain={[0, 5]}>
          <VictoryPolarAxis dependentAxis
                            style={{ axis: { stroke: "none" } }}
                            tickFormat={() => null}
          />
          <VictoryPolarAxis/>
          <VictoryArea
            data={this.props.data}
            style={{
              data: { fill: "#c43a31" },
            }}
          />

        </VictoryChart>
      </span>
    );
  }
}

export default PolarChart;
