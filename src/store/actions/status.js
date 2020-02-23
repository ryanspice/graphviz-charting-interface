/*
 * action types
 */

export const STATUS_LOAD_BAR = `STATUS_LOAD_BAR`;
export const STATUS_LOAD_FILE = `STATUS_LOAD_FILE`;
export const STATUS_SAVE = `STATUS_SAVE`;
export const STATUS_STATE = `STATUS_STATE`;

export function statusLoadBar(...args){
  return { type: STATUS_LOAD_BAR, ...args }
}

export function statusLoadFile(...args){
  return { type: STATUS_LOAD_FILE, ...args }
}

export function statusSave(...args){
  return { type: STATUS_SAVE, ...args }
}
export function statusState(...args){
  return { type: STATUS_STATE, ...args }
}
