import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Schedule from './schedule';
import MySchedule from './my-schedule';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/agendar" component={Schedule} />
      <Route path="/meus-agendamentos" component={MySchedule} />
    </Switch>
  </Router>
);

export default App;
