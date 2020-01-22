
import {
  ADD_TODO,
  APPLICATION_LOAD, APPLICATION_LOAD_EXAMPLE, APPLICATION_LOAD_PREVIOUS,
  APPLICATION_SAVE,
  APPLICATION_TOGGLE_MENU,
  APPLICATION_TOGGLE_CODE,
  APPLICATION_TOGGLE_DIALOGUE,
  APPLICATION_TOGGLE_FULLSCREEN,
  APPLICATION_ASSIGN_THEME,

  RETRIEVE_ITEM
} from '../actions/application'

async function application(state = [], action) {

  state = await state;

  switch (action.type) {
	case APPLICATION_LOAD:
	  const swatches = (await import("../../theme/colors.js")).default;
	  const theme = localStorage.getObject('theme') || swatches[3];
	  const data = localStorage.getObject('data') || action.data;
	  const navigation = localStorage.getObject('navigation');
	  const title = localStorage.getObject('title') || 'Example.graphviz';
	  return {
		...state,
		theme,
		action,
		data,
		navigation:navigation,
		sidebar:{
		  width:58
		},
		title:title,
		itemPosition:{x:0,y:0}
	  };
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
