import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/app';
import serviceWorker from './app.serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();
