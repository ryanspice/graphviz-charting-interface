
import {
  ADD_TODO,
  APPLICATION_LOAD, APPLICATION_LOAD_EXAMPLE, APPLICATION_LOAD_PREVIOUS,
  APPLICATION_SAVE,
  APPLICATION_TOGGLE_CODE,
  APPLICATION_TOGGLE_DIALOGUE,
  APPLICATION_TOGGLE_FULLSCREEN,
  APPLICATION_ASSIGN_THEME,
  TOGGLE_TODO
} from '../actions/application'

async function application(state = [], action) {
  switch (action.type) {
	case APPLICATION_TOGGLE_FULLSCREEN:
	  return {...state, action:action};
	case APPLICATION_TOGGLE_DIALOGUE:
	  return {...state, action:action};
	case APPLICATION_TOGGLE_CODE:
	  return {...state, action:action};
	case APPLICATION_SAVE:
	  return {...state, action:action};
	case APPLICATION_LOAD:
	  const swatches = (await import("../../theme/colors.js")).default;
	  const theme = localStorage.getObject('theme') || swatches[3];
		//console.log(theme,swatches);
	  return {
		  ...state,
		theme,
		action:action
	  };
	case APPLICATION_LOAD_PREVIOUS:
	  return {...state, action:action};
	case APPLICATION_LOAD_EXAMPLE:
	  return {...state, action:action};
	case ADD_TODO:
	  return {
		...state,
		...{
		  text: action.text,
			completed: false
		}
	  };
	case TOGGLE_TODO:
	  return state.map((todo, index) => {
		if (index === action.index) {
		  return Object.assign({}, todo, {
			completed: !todo.completed
		  })
		}
		return todo
	  });
	case APPLICATION_ASSIGN_THEME:

	  if (action.data)
		  localStorage.setObject('theme', action.data);

	  return {
	    ...state,
		...{
		  theme: action.data
		}
	  };

	default:
	  return state
  }
}
function theme(state= [], action) {
  switch(action.type) {

  }
}

export default application;
