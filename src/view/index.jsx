import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';

chrome.storage.sync.get('state', ({ state }) => {
  ReactDom.render(
    <Provider store={configureStore(state)}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
});
