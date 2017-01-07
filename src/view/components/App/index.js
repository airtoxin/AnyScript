import React from 'react';
import { connect } from 'react-redux';
import { toggleActivation, activate, deactivate } from '../../actions';
import Activation from '../Activation';
import Script from '../Script';

const App = ({ active, scrips, onClickToggle, onClickActivate, onClickDeactivate }) => (
  <div>
    <Activation
      active={active}
      onClickToggle={onClickToggle}
      onClickActivate={onClickActivate}
      onClickDeactivate={onClickDeactivate}
    />
    {scrips.map((script, i) => (
      <Script key={i} />
    ))}
  </div>
);

export default connect(
  state => ({
    active: state.app.active,
    scrips: state.script.scripts,
  }),
  dispatch => ({
    onClickToggle: () => dispatch(toggleActivation()),
    onClickActivate: () => dispatch(activate()),
    onClickDeactivate: () => dispatch(deactivate()),
  }),
)(App);
