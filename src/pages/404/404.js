import React, { Component } from 'react';
import './404.css';

import Row from '../../components/row/Row';

class PageNotFound extends Component {

  render() {

    return (
      <div className="PageNotFound container">
        <Row content={
          <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6">Oops, nothing here!</h3>
        }/>
        <Row content={
          <p className="col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6">
           Feel free to chill out, or <a href="/">head back to the home page.</a>
          </p>
        }/>
      </div>
    );
  }
}

export default PageNotFound;
