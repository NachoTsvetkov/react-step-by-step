import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./apps/routes/Home'),
  loading: Loading
});

const About = Loadable({
  loader: () => import('./apps/routes/About'),
  loading: Loading
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
