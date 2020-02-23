
import {
  STATUS_LOAD_BAR,
  STATUS_LOAD_FILE,
  STATUS_SAVE
} from '../actions/status'

import STATUS from "../models/status";

async function status(state = STATUS, action) {

  state = await state;

  switch (action.type) {

  	case STATUS_LOAD_BAR:
      state.progress = action.value;

  	  return {...state, action};
  	default:
  	  return await state
  }
}

export default status;