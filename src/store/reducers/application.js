
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
	APPLICATION_ASSIGN_DRAWER_OFFSET,
	RETRIEVE_ITEM
} from '../actions/application'

import initialization from "../actions/initialization";

const APPLICATION = {
	theme:{}
};

/**
 *
 * @param state
 * @param action
 * @returns {Promise<{[p: string]: *}|(Array&{navigation: *, data: *, action: *, drawer: (*|{width: number}), theme: *, itemPosition: {x: number, y: number}, title: (*|string)})|*>}
 */

async function application(state:any = APPLICATION, action) {

  state = await state;

  switch (action.type) {

	  case APPLICATION_LOAD:
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
	case APPLICATION_SAVE:
	  return {...state, action};
	case APPLICATION_LOAD_PREVIOUS:
	  return {...state, action};
	case APPLICATION_LOAD_EXAMPLE:

	  return {...state, action};

	  // TODO :: move to another reducer
	case RETRIEVE_ITEM:
	  return {...state, action, item:action.item, itemPosition:action.itemPosition};

	case APPLICATION_ASSIGN_DRAWER_OFFSET:

	  if (action.value) {
		localStorage.setObject('drawer_offset', action.value);
	  }

	return {...state,action, drawer_offset: action.value};
	default:
	  return state
  }
}


export default application;
