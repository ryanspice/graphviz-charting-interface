
import App from './App.svelte';

import {
  application
} from "./store/index";

import "./utils/storage/storage.getobject.js";
import "./utils/storage/storage.setobject.js";

const store = Redux.createStore(application
  , /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let app:App;

if (!window.overrun){

  app = new App({
	target: document.body,
	props: {}
  });

  window.overrun = true;
  window.app = app;
  window.store = store;

}

export {
  store
};

export default app;
