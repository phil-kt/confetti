import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

import App from './App.js';
import NotifiVR from './pages/portfolio/notifiVR/NotifiVR';
import Alien from './pages/portfolio/alien/Alien';
import Macy from './pages/portfolio/macy/Macy';
import Tachiyomi from './pages/portfolio/tachiyomi/Tachiyomi';
import PageNotFound from "./pages/404/404";

const history = createHistory();
let pastURL = "";

ReactGA.initialize('UA-36903668-3');


function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);

  if (history.location.pathname !== pastURL) {
    window.scrollTo(0, 0);
  }
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  pastURL = history.location.pathname;
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
        <Route exact path='/' component={App}/>
        <Route path='/notifivr' component={NotifiVR}/>
        <Route path='/alien' component={Alien}/>
        <Route path='/macys' component={Macy}/>
        <Route path='/tachiyomi' component={Tachiyomi}/>
        <Redirect path='/philippe_kimura-thollander_resume.pdf' />
        <Route path='*' exact={true} component={PageNotFound} />
      </Switch>
    </TrackPageView>
  </Router>)
  , document.getElementById('root'));

