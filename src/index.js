
import "./utils/storage/storage.getobject.js";
import "./utils/storage/storage.setobject.js";

import App from './App.svelte';
import Store from "./store/reducers/index";

import {
  APPLICATION_LOAD
} from "./store/actions/application";

import LoadingBar from "./components/static/LoadingBar.svelte";

let app: App;
let store: Store;
let props = {};

// initalize static components

if (!window.app) { // TODO :: fix app runs twice for some reason, webpack issue?

  (async function application() {

    await require("./debug");

    store = await Redux.createStore(Store, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    await new LoadingBar({
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


    log.debug(env)
    log.debug(lang)
    log.debug(log)

    return app;
  }(
    props
  ));

};

export {
  store
};

export default app;
