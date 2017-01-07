import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App.jsx';

ReactDom.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
