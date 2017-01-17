import React from 'react';
import ReactDom from 'react-dom';
import { debounce } from 'lodash';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import App from './components/App';

tree.on('update', debounce(() => {
  const state = tree.get();
  chrome.storage.sync.set({ state }, () => tree.emit('saved'));
}, 1000));

chrome.storage.sync.get('state', ({ state }) => {
  if (state) tree.deepMerge(state);

  const Rooted = root(tree, App);
  ReactDom.render(<Rooted />, document.getElementById('app'));
});
