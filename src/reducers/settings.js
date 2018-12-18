import { LOAD_SETTINGS, UPDATE_SETTINGS } from '../actions/settings.js';

const INITIAL_STATE = {
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_SETTINGS:
      return action.settings
    case UPDATE_SETTINGS:
      return action.settings;
    default:
      return state;
  }
};

export default settings;
