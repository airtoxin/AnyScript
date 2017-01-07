import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from './reducers';

export default (initialState) => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger())),
);
