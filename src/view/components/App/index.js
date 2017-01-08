import React from 'react';
import { connect } from 'react-redux';
import { toggleActivation, activate, deactivate, addScript } from '../../actions';
import ScriptTab from '../ScriptTab';
import Activation from '../Activation';
import ScriptForm from '../ScriptForm';

const App = ({ active, scrips, onClickToggle, onClickActivate, onClickDeactivate, onClickAddScript }) => (
  <div>
    <ScriptTab />
    <Activation
      active={active}
      onClickToggle={onClickToggle}
      onClickActivate={onClickActivate}
      onClickDeactivate={onClickDeactivate}
    />
    <ScriptForm id="myscript" />
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
    onClickAddScript: () => dispatch(addScript())
  }),
)(App);
