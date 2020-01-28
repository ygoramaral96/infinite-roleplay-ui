import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom';
import App from './App';
import Help from './views/Help';
import './index.scss';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/help" component={Help} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
