/**
 * index.js
 *  this acts as the entry point of the app,
 *  here we bootstrap our libraries, Svelte, and Redux
 *
 * imports
 *  here we provide a collection of helper functions, redux, and declarations for flowtype
 */

import pkg from "../package.json";
import "./debug";

import "./utils/storage/storage.getobject";
import "./utils/storage/storage.setobject";

import {createStore} from 'redux';

declare var log: any;
declare var env: any;
declare var lang: any;

let app;
let store;
let props = {};

const id = pkg.short_name;
const target = {
  target:document.body
};

/**
 * initialize application, store, and stuff
 */

export default ((async function application() {

  // TODO : remove window check, bug in ETK dev server

  if (window[id])
	return log.error(new Error("FAILURE: application already initialized"));

  window[id] = true;

  // BOOTSTRAP application and redux

  const {__REDUX_DEVTOOLS_EXTENSION__} = window;
  const App = (await import(/* webpackPreload: true, webpackPrefetch: true */ './app/App.svelte')).default;
  const Store = (await import(/* webpackPreload: true, webpackPrefetch: true */ './store/reducers/index')).default;

  // REDUX store creation for component consumption

  store = await createStore(Store, /* preloadedState, */
	__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

  // DEBUG

  log.debug('ENV',env);
  log.debug('LANG',lang);

  return app = await new App(target);

}(
  props
)));

/* */

export {
  store
};

//export default app;
