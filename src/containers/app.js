import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';

export default class App extends Component {
  render() {
    return <Route exact path="/" component={Home} />;
  }
}
