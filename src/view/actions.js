import { findIndex } from 'lodash';
import uuid from 'uuid';

const findScriptIndex = (tree, id) => findIndex(tree.get(['scripts']), script => script.id === id);

export function addScript(tree, type) {
  tree.push(['scripts'], {
    id: uuid(),
    type,
    code: '',
    url: '',
  });
}

export function changeScriptCode(tree, id, code) {
  const idx = findScriptIndex(tree, id);
  tree.set(['scripts', idx, 'code'], code);
}

export function changeScriptUrl(tree, id, url) {
  const idx = findScriptIndex(tree, id);
  tree.set(['scripts', idx, 'url'], url);
}

export function deleteScript(tree, id) {
  const idx = findScriptIndex(tree, id);
  tree.splice(['scripts'], [idx, 1]);
}
