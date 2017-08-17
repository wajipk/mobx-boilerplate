import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from 'views/Home';
import About from 'views/About';

const history = createBrowserHistory();

const CustomRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} history={history} />
      <Route path="/about" render={() => (<div>About</div>)} history={history} />
      <Route path="/about/me" render={() => (<div>Me</div>)} history={history} />
      <Route path="*" render={() => (<div>404</div>)} history={history} />
    </Switch>
  </Router>
);
export default CustomRouter;
