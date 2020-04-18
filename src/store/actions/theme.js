/*
 * action types
 */

export const THEME_ = `THEME_`;
export const THEME_THEME_MODE = `THEME_THEME_MODE`;
export const THEME_SET = `THEME_SET`;
export const THEME_LOAD = `THEME_LOAD`;
export const THEME_LOAD_FROM_STORAGE = `THEME_LOAD_FROM_STORAGE`;

export function theme_(...args) {
	return {type: THEME_, ...args};
}

export function themeThemeMode(...args) {
	return {type: THEME_THEME_MODE, ...args};
}

export function themeSet(...args) {
	return {type: THEME_SET, ...args};
}

export function themeLoad(...args) {
	return {type: THEME_LOAD, ...args};
}

export function themeLoadFromStorage(...args) {
	return {type: THEME_LOAD_FROM_STORAGE, ...args};
}