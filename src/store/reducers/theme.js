import {
	THEME_,
	THEME_THEME_MODE,
	THEME_SET,
	THEME_LOAD,
	THEME_LOAD_FROM_STORAGE,
	THEME_CYCLE_MODE,
} from '../actions/theme';

import THEME from "../models/theme";

import {setDarkMode} from "../actions/darkmode";

/**
 * GLOBAL APPLICATION THEME
 * @param state
 * @param action
 * @returns {Promise<{[p: string]: *}|*>}
 */

async function theme(state: any = THEME, action) {

	state = await state;

	switch (action.type) {

		case THEME_:
			return {...state, action};

		case THEME_CYCLE_MODE:

			let mode;
			switch(state.mode){
				case 'auto':
					mode =  'dark';
					break;
				case 'light':
					mode =  'auto';
					break;
				case 'dark':
					mode =  'light';
					break;
			}
			localStorage.setObject('--mode', mode);

			return {...state, action, mode};
			break;

		case THEME_THEME_MODE:

			const darkMode = setDarkMode(action.darkMode, state.data);

			return {...state, action, darkMode};

		case THEME_SET:

			if (action.data) {
				const _theme_ = (String(action.data?.name || action.data)).toLowerCase().replace(' ', '-');

				localStorage.setObject('theme', _theme_);
				localStorage.setObject('--theme', _theme_);

				return {
					...state,
					theme: _theme_,
					primary: _theme_,
					action
				};
			}

			return {...state, action};

		case THEME_LOAD:

			return {...state, action};

		case THEME_LOAD_FROM_STORAGE:

			return {...state, action};

		default:
			return state;
	}
}

export default theme;
