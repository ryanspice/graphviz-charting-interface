<script>

  import {
    onMount,
    afterUpdate
  } from 'svelte';

import {store} from "./index";

  import {
    STATUS_STATE
  } from './store/actions/status';

  import Dialog from "./components/static/Dialog";
  import Welcome from "./components/content/Welcome";
  import Settings from "./components/content/Settings";

  // TODO: proper localization
  const copy = (require('./lang/en.json'));

  export let title = 'undefined';
  export let confirm = "true";
  export let deny = "false";

  let dWelcome = false;
  let dDelete = false;
  let dSettings = false;

  const handleDialog = (state) => {

    switch(state){

      case 1090:
        dDelete = true;
      break;
      default:

    }

  }

  /**
   *
   */

  export let onConfirm = () => {

  };

  /**
   * svelte onMount,
   *  subscribe and dispatch dialogs based on "state"
   */

  onMount(async function () {

  	store.subscribe(async () => {

    	  const {
          status
    	  } = await store.getState();

        const {
          options,
          progress,
          state,
        } = await status;

        handleDialog(await state);

    });

    // for debugging
    //

    store.dispatch({
      type: STATUS_STATE,
      value:1010
    });

  });

  afterUpdate(()=>{

  });

</script>

<!-- WELCOME -->

<Dialog
  open={dWelcome}
  id="dialog-welcome"
  title={``}
  confirm={``}
  deny={``}
  onConfirm={()=>{
    dWelcome = false;
    store.dispatch({
      type: STATUS_STATE,
      value:1010
    });
  }}
 >

  <Welcome
    onInsertChart = {()=>{

      //STORE dispatch new chart

    }
  }/>

</Dialog>

<!-- DELETE GRAPH -->

<Dialog
  open={dDelete}
  id="dialog-delete"
  title={copy.dialog.delete.title}
  confirm={`Yes`}
  deny={`No`}
  onConfirm={()=>{
    dDelete = false;
    store.dispatch({
      type: STATUS_STATE,
      value:1099
    });
  }}
 >

</Dialog>

<!-- SETTINGS -->

<Dialog
  open={dSettings}
  id="dialog-settings"
  title={copy.dialog.settings.title}
  confirm={`Yes`}
  deny={`No`}
  onConfirm={()=>{
    dSettings = false;
    store.dispatch({
      type: STATUS_STATE,
      value:1020
    });
  }}
 >
 <Settings />
</Dialog>
