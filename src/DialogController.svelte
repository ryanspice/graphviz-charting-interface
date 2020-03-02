<script>

import {store} from "./index";

import Dialog from "./components/static/Dialog";
import Welcome from "./components/Welcome";
  import {
    STATUS_STATE
  } from './store/actions/status'

  import {
    onMount,
    afterUpdate
  } from 'svelte';

  export let title = 'undefined';
  export let confirm = "true";
  export let deny = "false";

  export let onConfirm = () => {

  };

  const dialogs = [

  ];

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

    });

    store.dispatch({
      type: STATUS_STATE,
      value:1010
    });
  });

  afterUpdate(()=>{

  });

</script>

<Dialog
  open={false}
  title={``}
  confirm={``}
  deny={``}
  onConfirm={()=>{
    console.log('eh')
    store.dispatch({
      type: STATUS_STATE,
      value:1010
    });

    //applicationReady = false;
  }}
 >

  <Welcome
    onInsertChart = {()=>{

      //STORE dispatch new chart

    }
  }/>

</Dialog>
