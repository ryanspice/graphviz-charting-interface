
import {
  STATUS_LOAD_BAR,
  STATUS_LOAD_FILE,
  STATUS_SAVE,
  STATUS_STATE,
  STATUS_SETTINGS,
  STATUS_THEME,
} from '../actions/status'

import STATUS from "../models/status";

async function status(state = STATUS, action) {

  state = await state;

  switch (action.type) {

  	case STATUS_LOAD_BAR:
      state.progress = action.value;
	  return {...state, action};

    case STATUS_LOAD_FILE:
      return {...state, action};
    case STATUS_SAVE:
      return {...state, action};

    case STATUS_SETTINGS:
      state.options = {...state.options, ...action.value}
    return {...state, action};

    case STATUS_THEME:
      //state.theme
     return {...state, action};

    case STATUS_STATE:
      state.state = action.value;
    return {...state,action}

  	default:
  	  return await state
  }
}

export default status;
