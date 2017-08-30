import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import NotifiVR from './pages/portfolio/notifiVR/NotifiVR';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/notifivr' component={NotifiVR}/>
      </Switch>
    );
  }
}

export default App;
