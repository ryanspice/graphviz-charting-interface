import {store} from "../../index";
import {THEME_SET} from "./theme";

/**
 * setup the initial state of the application
 * @param state
 * @param action
 * @returns {Promise<Array&{navigation: *, data: *, action: *, drawer: (*|{width: number}), theme: *, itemPosition: {x: number, y: number}, title: (*|string)}>}
 */

export default async function initialization(state = [], action) {

  const swatches = (await import("../../theme/colors.js")).default;
  const theme = localStorage.getObject('--theme') || swatches[3];
  const data = localStorage.getObject('data') || action.data;
  const navigation = localStorage.getObject('navigation');
  const title = localStorage.getObject('title') || 'reactive-graph-interface';

  const drawer = localStorage.getObject('drawer') || {
	width: 58
  };

  const darkMode = localStorage.getObject('darkMode');

	store.dispatch({
			type: THEME_SET,
			data: theme
		}
	)

  return {
    error:``,
	...state,
	theme,
	action,
	data,
	navigation,
	drawer,
	title,
	darkMode,
	itemPosition: {x: 0, y: 0}
  };

};
