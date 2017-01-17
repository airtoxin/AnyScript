import { findIndex } from 'lodash';
import uuid from 'uuid';

const findScriptIndex = (tree, id) => findIndex(tree.get(['scripts']), script => script.id === id);

export function addScript(tree, type) {
  tree.push(['scripts'], {
    id: uuid(),
    type,
    value: '',
    regexp: '.*',
  });
}

export function changeScript(tree, id, value) {
  const idx = findScriptIndex(tree, id);
  tree.set(['scripts', idx, 'value'], value);
}

export function onChangeUrlRegExp(tree, id, regexp) {
  const idx = findScriptIndex(tree, id);
  tree.set(['scripts', idx, 'regexp'], regexp);
}

export function deleteScript(tree, id) {
  const idx = findScriptIndex(tree, id);
  tree.splice(['scripts'], [idx, 1]);
}
