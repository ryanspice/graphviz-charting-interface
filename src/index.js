
import App from './App.svelte';

import {
  APPLICATION_LOAD
} from "./store/actions/application";

import Store from "./store/reducers/index";

import LoadingBar, {
  reset
} from "./components/static/LoadingBar.svelte";

import "./utils/storage/storage.getobject.js";
import "./utils/storage/storage.setobject.js";


let app: App;
let store: Store;
let loading: LoadingBar;
let props = {};

if (!window.app) { // TODO :: fix app runs twice for some reason, webpack issue?

  // initalize static components

  (async function application() {

    await require("./debug");

    store = Redux.createStore(Store, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    loading = await new LoadingBar({
      target: document.body
    });

    app = await new App({
      target: document.body
    });

    //TODO :: remove
    window.app = app;
    //window.store = store;

    await store.dispatch({
      type: APPLICATION_LOAD
    });

    //log.debug('index.js', 'eh')

    return app;
  }(
    props
  ));

}

export {
  store
};

export default app;
