
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

function application(state = [], action) {
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
	  const theme = localStorage.getObject('theme');

	  if (theme){
		return {
		  ...state,
		  theme,
		  action:action
		}
	  }

	  return {
		  ...state,
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
