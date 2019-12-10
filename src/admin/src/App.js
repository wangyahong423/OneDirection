import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './container/Login';
import Home from './container/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/home' component={Home} />
          </Switch>
      </Router>
    )
  }
}
