import React from 'react';
import { connect } from 'react-redux';
import { toggleActivation, activate, deactivate } from './actions';

const App = ({ dispatch, active }) => (
  <div>
    <h1>Current: {active ? 'true' : 'false'}</h1>
    <button onClick={() => dispatch(toggleActivation())}>Toggle</button>
    <button onClick={() => dispatch(activate())}>Activate</button>
    <button onClick={() => dispatch(deactivate())}>Deactivate</button>
  </div>
);

const selector = ({ app: { active } }) => {
  return { active };
};

export default connect(selector)(App);
