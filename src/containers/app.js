import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import async from './app.async';

const Home = async(() => import('./home').then(module => module.default), {
  name: 'Home'
});

const Login = async(() => import('./login').then(module => module.default), {
  name: 'Login'
});

const Schedule = async(
  () => import('./schedule').then(module => module.default),
  {
    name: 'Schedule'
  }
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/agendamento" component={Schedule} />
    </Switch>
  </Router>
);

export default App;
