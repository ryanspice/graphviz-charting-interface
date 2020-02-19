
import {
	ADD_TODO,
	APPLICATION_LOAD,
	APPLICATION_LOAD_EXAMPLE,
	APPLICATION_LOAD_PREVIOUS,
	APPLICATION_SAVE,
	APPLICATION_TOGGLE_MENU,
	APPLICATION_TOGGLE_CODE,
	APPLICATION_TOGGLE_DIALOGUE,
	APPLICATION_TOGGLE_FULLSCREEN,
	APPLICATION_TOGGLE_DARKMODE,
	APPLICATION_ASSIGN_THEME,
	APPLICATION_ASSIGN_DRAWER_OFFSET,
	RETRIEVE_ITEM
} from '../actions/application'

import initialization from "../actions/initialization";
import {setDarkMode} from "../actions/darkmode";



const state_default = {
	theme:{ name: "Deep Purple", primary: 'swatch-color-deep-purple', secondary: '' }
};




async function application(state = [], action) {

  state = await Object.assign(await state_default, await state);

  switch (action.type) {

	case APPLICATION_LOAD:
		console.info('initialization')
	  return await initialization(await state, action);
	case APPLICATION_TOGGLE_MENU:
	  localStorage.setObject('navigation', !action.navigation);
	  return {...state, navigation:!action.navigation};
	case APPLICATION_TOGGLE_FULLSCREEN:
	  return {...state, action};
	case APPLICATION_TOGGLE_DIALOGUE:
	  return {...state, action};
	case APPLICATION_TOGGLE_CODE:
	  return {...state, action};
	case APPLICATION_TOGGLE_DARKMODE:
	  const darkMode = setDarkMode(action.darkMode,state.data);
	  return {...state, action, darkMode};
	case APPLICATION_SAVE:
	  return {...state, action};
	case APPLICATION_LOAD_PREVIOUS:
	  return {...state, action};
	case APPLICATION_LOAD_EXAMPLE:

	  return {...state, action};

	  // TODO :: move to another reducer
	case RETRIEVE_ITEM:
	  return {...state, action, item:action.item, itemPosition:action.itemPosition};

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
	case APPLICATION_ASSIGN_DRAWER_OFFSET:

	  if (action.value) {
		localStorage.setObject('drawer_offset', action.value);
	  }

	return {...state,action, drawer_offset: action.value};
	default:
	  return state
  }
}
function theme(state= [], action) {
  switch(action.type) {

  }
}

export default application;
