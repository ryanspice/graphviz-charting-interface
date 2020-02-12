/*
 * action types
 */

export const DIALOG_SETTINGS = `DIALOG_SETTINGS`;

export function dialogSettings(...args){
  return { type: DIALOG_SETTINGS, ...args }
}
