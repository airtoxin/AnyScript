import React from 'react';
import { connect } from 'react-redux';
import { toggleActivation, activate, deactivate } from '../../actions';
import Activation from '../Activation';

const App = ({ active, onClickToggle, onClickActivate, onClickDeactivate }) => (
  <div>
    <Activation
      active={active}
      onClickToggle={onClickToggle}
      onClickActivate={onClickActivate}
      onClickDeactivate={onClickDeactivate}
    />
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
