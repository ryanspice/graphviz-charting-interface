/**
 * index.js
 *  this acts as the entry point of the app,
 *  here we bootstrap our libraries, Svelte, and Redux
 *
 * utils
 *  here we provide a collection of helper functions
 */

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
let id = 'rci';

/**
 * initialize application, store, and stuff
 */

(async function application() {

  if (window[id])
	return log.error(new Error("FAILURE: application already initialized"));

  window[id] = true;

  const {__REDUX_DEVTOOLS_EXTENSION__} = window;
  const App = (await import(/* webpackPreload: true, webpackPrefetch: true */ './app/App.svelte')).default;
  const Store = (await import(/* webpackPreload: true, webpackPrefetch: true */ './store/reducers/index')).default;

  store = await createStore(Store, /* preloadedState, */
	__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__());

  log.debug(env);
  log.debug(lang);
  log.debug(log);

  return app = await new App({
	target: document.body
  });

}(
  props
));

/* */

export {
  store
};

export default app;
