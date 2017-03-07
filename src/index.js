import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ServiceWorker } from './serviceWorker';
import './index.css';

ServiceWorker();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
