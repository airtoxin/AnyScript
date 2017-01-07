import React from 'react';
import { connect } from 'react-redux';
import { toggleActivation, activate, deactivate } from './actions';

const App = ({ active, onClickToggle, onClickActivate, onClickDeactivate }) => (
  <div>
    <h1>Current: {active ? 'true' : 'false'}</h1>
    <button onClick={onClickToggle}>Toggle</button>
    <button onClick={onClickActivate}>Activate</button>
    <button onClick={onClickDeactivate}>Deactivate</button>
  </div>
);

export default connect(
  state => ({
    active: state.app.active,
  }),
  dispatch => ({
    onClickToggle: () => dispatch(toggleActivation()),
    onClickActivate: () => dispatch(activate()),
    onClickDeactivate: () => dispatch(deactivate()),
  }),
)(App);
