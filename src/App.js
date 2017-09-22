import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import NotifiVR from './pages/portfolio/notifiVR/NotifiVR';
import Macy from './pages/portfolio/macy/Macy';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/notifivr' component={NotifiVR}/>
        <Route path='/macys' component={Macy}/>
      </Switch>
    );
  }
}

export default App;
