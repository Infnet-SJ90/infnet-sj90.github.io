import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Agendamento from './agendamento';
import Login from './login';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agendamento" component={Agendamento} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}
