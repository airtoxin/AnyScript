import { combineReducers } from 'redux';
import {
  DEACTIVATE,
  ACTIVATE,
  TOGGLE_ACTIVATION,
  ADD_SCRIPT,
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
  state = initial.app,
  { type },
) => {
  switch (type) {
    case DEACTIVATE:
      return { ...state, active: false };
    case ACTIVATE:
      return { ...state, active: true };
    case TOGGLE_ACTIVATION:
      return { ...state, active: !state.active }
    default:
      return state;
  }
};

const script = (
  state = initial.script,
  { type, payload },
) => {
  switch (type) {
    case ADD_SCRIPT:
      return { ...state, script: state.script.concat([payload])  };
    default:
      return state;
  }
};

export default combineReducers({
  app,
  script,
});
