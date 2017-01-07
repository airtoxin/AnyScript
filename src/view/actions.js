import { createActions } from 'redux-actions';

export const DEACTIVATE = 'DEACTIVATE';
export const ACTIVATE = 'ACTIVATE';
export const TOGGLE_ACTIVATION = 'TOGGLE_ACTIVATION';

export const {
  deactivate,
  activate,
  toggleActivation,
} = createActions(
  DEACTIVATE,
  ACTIVATE,
  TOGGLE_ACTIVATION,
);

export const ADD_SCRIPT = 'ADD_SCRIPT';

export const {
  addScript
} = createActions(
  ADD_SCRIPT
);
