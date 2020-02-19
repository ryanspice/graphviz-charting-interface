
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

    await loading.increment(.2);

    app = await new App({
      target: document.body,
      props: {
        loading,
        store
      }
    });

    await loading.increment(.2);

    //TODO :: remove
    window.app = app;
    window.store = store;

    requestAnimationFrame(async function() {

      await console.log('eh')
      await store.dispatch({
        type:APPLICATION_LOAD
      });

      await loading.increment(.2);
      await console.log('eh2');
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
