
import App from './App.svelte';
import LoadingBar, {reset} from "./LoadingBar.svelte";

import {
  application
} from "./store/index";

import "./utils/storage/storage.getobject.js";
import "./utils/storage/storage.setobject.js";

const store = Redux.createStore(application
  , /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let app:App;
let loading:LoadingBar;
let props = {};

if (!window.overrun){  // TODO :: fix app runs twice for some reason, webpack issue?

  (async function application(){

	loading = await new LoadingBar({
	  target: document.body
	});

	await loading.increment(.5);

	app = await new App({
	  target: document.body,
	  props: {
	    loading,
		store
	  }
	});

	await loading.increment(.1);

	//TODO :: remove
	window.overrun = true; // TODO :: fix app runs twice for some reason, webpack issue?
	window.app = app;
	window.store = store;

	requestAnimationFrame(function(){
	  //loading.set(1);
	});

	return app;
  }(
    props
  ));

}

export {
  store
};

export default app;
