
import {
  ADD_TODO,
  APPLICATION_LOAD, APPLICATION_LOAD_EXAMPLE, APPLICATION_LOAD_PREVIOUS,
  APPLICATION_SAVE,
  APPLICATION_TOGGLE_CODE,
  APPLICATION_TOGGLE_DIALOGUE,
  APPLICATION_TOGGLE_FULLSCREEN,
  APPLICATION_ASSIGN_THEME
} from '../actions/application'

async function application(state = [], action) {
  switch (action.type) {
	case APPLICATION_TOGGLE_FULLSCREEN:
	  return {...state, action};
	case APPLICATION_TOGGLE_DIALOGUE:
	  return {...state, action};
	case APPLICATION_TOGGLE_CODE:
	  return {...state, action};
	case APPLICATION_SAVE:
	  return {...state, action};
	case APPLICATION_LOAD:
	  const swatches = (await import("../../theme/colors.js")).default;
	  const theme = localStorage.getObject('theme') || swatches[3];
	  const data = localStorage.getObject('data') || action.data;
	  return {
		  ...state,
      theme,
      action,
      data
	  };
	case APPLICATION_LOAD_PREVIOUS:
	  return {...state, action};
	case APPLICATION_LOAD_EXAMPLE:
	  return {...state, action};
	case APPLICATION_ASSIGN_THEME:
	  if (action.data){
		  localStorage.setObject('theme', action.data);
      return {
        ...state,
        theme: action.data,
        action
      };
    }
    return {...state,action};

	default:
	  return state
  }
}
function theme(state= [], action) {
  switch(action.type) {

  }
}

export default application;
