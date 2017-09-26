import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from './pages/home/Home';
import NotifiVR from './pages/portfolio/notifiVR/NotifiVR';
import Macy from './pages/portfolio/macy/Macy';

const history = createHistory();

function logPageView() {
  console.log("page");
  window.scrollTo(0,0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  return null;
}

class TrackPageView extends React.Component {
  componentWillMount() { logPageView() }
  componentWillUpdate() { logPageView() }
  render() { return <Route children={this.props.children}/> }
}

ReactDOM.render((
  <Router history={history} >
    <TrackPageView>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/notifivr' component={NotifiVR}/>
        <Route path='/macys' component={Macy}/>
      </Switch>
    </TrackPageView>
  </Router>)
  , document.getElementById('root'));
registerServiceWorker();
