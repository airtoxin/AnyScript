import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middlewares from './middlewares';
import reducer from './reducers';

export default (initialState) => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
