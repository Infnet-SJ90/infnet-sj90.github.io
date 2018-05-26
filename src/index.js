import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './app.store';
import App from './containers/app';
import registerServiceWorker from './app.serviceWorker';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);
registerServiceWorker();
