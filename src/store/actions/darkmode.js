/**
 * toggle css vars for darkmode
 * @param state
 * @param action
 * @returns {Promise<void>}
 */
export default async function(state, action) {

  const a = !action.darkMode ? '#000000' : '#ffffff';
  const b = !action.darkMode ? '#ffffff' : '#000000';

  await document.documentElement.style.setProperty('--theme-background', a);
  await document.documentElement.style.setProperty('--theme-color', b);


  //Ideally we want to edit the state, but also we dont want to keep re rendering

  state.data.data = await (await state.data.data).replace(a, b);
  document.querySelectorAll(`[stroke="${a}"]`).forEach(i => i.setAttribute(`stroke`, b));
  document.querySelectorAll(`[fill="${a}"]`).forEach(i => i.setAttribute(`fill`, b));


  // store locally, i like to store locally lol

  localStorage.setObject('darkMode', action.darkMode);

  return action.darkMode;
}

export async function setDarkMode(darkMode){

  const a = !darkMode ? '#000000' : '#ffffff';
  const b = !darkMode ? '#ffffff' : '#000000';

  await document.documentElement.style.setProperty('--theme-background', a);
  await document.documentElement.style.setProperty('--theme-color', b);

  document.querySelectorAll(`[stroke="${a}"]`).forEach(i => i.setAttribute(`stroke`, b));
  document.querySelectorAll(`[fill="${a}"]`).forEach(i => i.setAttribute(`fill`, b));

  localStorage.setObject('darkMode', darkMode);

  //return darkMode;

  return [a,b];
}
