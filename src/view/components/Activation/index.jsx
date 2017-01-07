import React from 'react';

export default ({ active, onClickToggle, onClickActivate, onClickDeactivate }) => (
  <div>
    <h1>Current: {active ? 'true' : 'false'}</h1>
    <button onClick={onClickToggle}>Toggle</button>
    <button onClick={onClickActivate}>Activate</button>
    <button onClick={onClickDeactivate}>Deactivate</button>
  </div>
);
