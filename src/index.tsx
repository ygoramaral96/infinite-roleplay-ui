import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom';
import App from './App';
import PageHelp from './pages/page-help/index';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/help" component={PageHelp} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
