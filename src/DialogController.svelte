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
  import Welcome from "./components/Welcome";

  export let title = 'undefined';
  export let confirm = "true";
  export let deny = "false";

  let dDelete = false;

  export let onConfirm = () => {

  };

  const dialogs = {
    delete:false
  };

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

        switch(await state){

          case 1090:
            dDelete = true;
          break;
          default:

        }

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
let copy = (require('./lang/en.json'));
console.log(copy)
</script>

<!-- WELCOME -->

<Dialog
  open={false}
  id="dialog-welcome"
  title={``}
  confirm={``}
  deny={``}
  onConfirm={()=>{
    console.log('eh')
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
