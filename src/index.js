import App from './App.svelte';
import LoadingBar, {
  reset
} from "./components/static/LoadingBar.svelte";

/*
import {
  application,
  dialog
} from "./store/index";
*/

import Store from "./store/reducers/index";

console.log(Store);


import "./utils/storage/storage.getobject.js";
import "./utils/storage/storage.setobject.js";

const store = Redux.createStore(Store, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let app: App;
let loading: LoadingBar;
let props = {};

if (!window.app) { // TODO :: fix app runs twice for some reason, webpack issue?

  // initalize static components

  (async function application() {

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

    await loading.increment(.01);

    //TODO :: remove
    window.app = app;
    window.store = store;

    requestAnimationFrame(function() {
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
