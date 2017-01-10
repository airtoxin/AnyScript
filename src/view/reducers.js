import { combineReducers } from 'redux';
import { findIndex } from 'lodash';
import {
  DEACTIVATE,
  ACTIVATE,
  TOGGLE_ACTIVATION,
  ADD_SCRIPT,
  SAVE_SCRIPT,
} from './actions';

const initial = {
  app: {
    active: true,
  },
  script: {
    scripts: [],
  }
};

const app = (
  appState = initial.app,
  { type },
) => {
  switch (type) {
    case DEACTIVATE:
      return { ...appState, active: false };
    case ACTIVATE:
      return { ...appState, active: true };
    case TOGGLE_ACTIVATION:
      return { ...appState, active: !appState.active }
    default:
      return appState;
  }
};

const script = (
  scriptState = initial.script,
  { type, payload },
) => {
  switch (type) {
    case ADD_SCRIPT:
      return {
        ...scriptState,
        scripts: scriptState.scripts.concat([ payload ]),
      };
    case SAVE_SCRIPT:
      const idx = findIndex(scriptState.scripts, s => s.id === payload.id);
      return {
        ...scriptState,
        scripts: scriptState.scripts.splice(0, idx).concat([payload], scriptState.scripts.splice(idx + 1)),
      };
    default:
      return scriptState;
  }
};

export default combineReducers({
  app,
  script,
});
