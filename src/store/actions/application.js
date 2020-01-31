/*
 * action types
 */

export const GRAPH_UPDATE = `GRAPH_UPDATE`;

export const ADD_CONNECTION = 'ADD_CONNECTION';
export const ADD_DIGRAPH = 'ADD_DIGRAPH';
export const ADD_SUBGRAPH = 'ADD_SUBGRAPH';
export const ADD_STYLE = 'ADD_STYLE';

export const RETRIEVE_DIGRAPH = 'RETRIEVE_DIGRAPH';
export const RETRIEVE_SUBGRAPH = 'RETRIEVE_SUBGRAPH';
export const RETRIEVE_STYLE = 'RETRIEVE_STYLE';
export const RETRIEVE_CONNECTION = 'RETRIEVE_CONNECTION';
export const RETRIEVE_ITEM = 'RETRIEVE_ITEM';
export const RETRIEVE_ = 'RETRIEVE_';

export const APPLICATION_TOGGLE_FULLSCREEN = `APPLICATION_TOGGLE_FULLSCREEN`;
export const APPLICATION_TOGGLE_DIALOGUE = `APPLICATION_TOGGLE_DIALOGUE`;
export const APPLICATION_TOGGLE_CODE = `APPLICATION_TOGGLE_CODE`;
export const APPLICATION_TOGGLE_MENU = `APPLICATION_TOGGLE_MENU`;
export const APPLICATION_TOGGLE_DARKMODE = `APPLICATION_TOGGLE_DARKMODE`;
export const APPLICATION_SAVE = `APPLICATION_SAVE`;
export const APPLICATION_LOAD = `APPLICATION_LOAD`;
export const APPLICATION_LOAD_PREVIOUS = `APPLICATION_LOAD_PREVIOUS`;
export const APPLICATION_LOAD_EXAMPLE = `APPLICATION_LOAD_EXAMPLE`;

export const APPLICATION_ASSIGN_THEME = `APPLICATION_ASSIGN_THEME`;

// TODO :: Bring into separate file ?

export const APPLICATION_ASSIGN_DRAWER_OFFSET = `APPLICATION_ASSIGN_DRAWER_OFFSET`;
export const APPLICATION_DRAWER_SAVE_OFFSET = `APPLICATION_DRAWER_SAVE_OFFSET`;

/*
 * action creators
 */

export function addConnection(...args) {
  return { type: ADD_CONNECTION, ...args }
}
export function addDigraph(...args) {
  return { type: ADD_DIGRAPH, ...args }
}
export function addSubgraph(...args) {
  return { type: ADD_SUBGRAPH, ...args }
}
export function addStyle(...args) {
  return { type: ADD_STYLE, ...args }
}
//
export function retrieveConnection(...args) {
  return { type: RETRIEVE_DIGRAPH, ...args }
}
export function retrieveDigraph(...args) {
  return { type: RETRIEVE_SUBGRAPH, ...args }
}
export function retrieveSubgraph(...args) {
  return { type: RETRIEVE_STYLE, ...args }
}
export function retrieveStyle(...args) {
  return { type: RETRIEVE_CONNECTION, ...args }
}
export function retrieveItem(...args) {
  return { type: RETRIEVE_ITEM, ...args }
}
//
export function applicationToggleFullscreen(...args){
  return { type: APPLICATION_TOGGLE_FULLSCREEN, ...args }
}
export function applicationToggleDialogue(...args){
  return { type: APPLICATION_TOGGLE_DIALOGUE, ...args }
}
export function applicationToggleCode(...args){
  return { type: APPLICATION_TOGGLE_CODE, ...args }
}
export function applicationToggleMenu(...args){
  return { type: APPLICATION_TOGGLE_MENU, ...args }
}
export function applicationToggleDarkMode(...args){
  return { type: APPLICATION_TOGGLE_DARKMODE, ...args }
}
export function applicationSave(...args){
  return { type: APPLICATION_SAVE, ...args }
}
export function applicationLoad(...args){
  return { type: APPLICATION_LOAD, ...args }
}
export function applicationLoadPrevious(...args){
  return { type: APPLICATION_LOAD_PREVIOUS, ...args }
}
export function applicationLoadExample(...args){
  return { type: APPLICATION_LOAD_EXAMPLE, ...args }
}
export function applicationAssignTheme(...args){
  return { type: APPLICATION_ASSIGN_THEME, ...args }
}
export function applicationAssignDrawerOffset(...args){
  return { type: APPLICATION_ASSIGN_DRAWER_OFFSET, ...args }
}
