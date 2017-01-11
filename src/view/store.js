import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middlewares from './middlewares';
import reducer from './reducers';

const syncState = (store) => {
  const state = store.getState();
  chrome.storage.sync.set({
    state: state,
  });
}

export default initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  store.subscribe(() => syncState(store));
  syncState(store);

  return store;
};
