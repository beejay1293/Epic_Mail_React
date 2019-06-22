import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import Home from './Home/home';
import Auth from './Auth/auth';
import Dashboard from './Dashboard/dashboard';
import reducer from '../reducers';

const initialState = { tech: 'React' };
const store = createStore(reducer, initialState);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
