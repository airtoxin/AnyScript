import React from 'react';
import ReactDom from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import App from './components/App';

const Rooted = root(tree, App);

ReactDom.render(<Rooted />, document.getElementById('app'));

chrome.storage.sync.get('state', ({ state }) => {
});
