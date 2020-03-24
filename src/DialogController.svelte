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
  import Upload from "./components/static/Upload.svelte";
  import Settings from "./components/content/Settings";


    import LinearProgress from '@smui/linear-progress';

      let progress = 0;
      let progressMax = 1;
      let progressShow = 0;
      let closed = false;
      let timer;


  export let title = 'undefined';
  export let confirm = "true";
  export let deny = "false";

  let dWelcome = localStorage.getItem('--welcome') || true;
  let dialogUpload = {}
  let dialogWelcome = {
    visible:true
  }


  let dDelete = false;
  let dSettings = false;
  let dUpload = false;



  const handleDialog = (state) => {

    log.debug(`DialogController ${state}`)

    switch(state){


      case 1001:
        dUpload = true;
        dialogUpload.$$.ctx[4]();
      break;
      case 1001:
        dUpload = false;
        dWelcome = false;

        dSettings = true;
      break;
      case 1002:
        store.dispatch({
          type: STATUS_STATE,
          value:1003
        });
        dialogWelcome.$$.ctx[0].$$.ctx[10]();
      break;

      case 1020:
        dSettings = true;
      break;


      case 1021:
        dSettings = false;
      break;
      case 1090:
        dDelete = true;
      break;
      case 9000:
        log.error(state.error)
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
/*
    store.dispatch({
      type: STATUS_STATE,
      value:1010
    });
*/
  });

  afterUpdate(()=>{

  });

</script>

<!-- WELCOME -->

<Dialog
  bind:this={dialogWelcome}
  open={dWelcome}
  id="dialog-welcome"
  title={``}
  confirm={``}
  deny={``}
 >

  <Welcome
  onInsertChart={()=>{
    // i really dont know how to reference things properly, or maybe im just slow atm
    dialogWelcome.$$.ctx[0].$$.ctx[10]();
    store.dispatch({
      type: STATUS_STATE,
      value:1020
    });
  }}
  />

</Dialog>

<!-- UPLOAD GRAPH -->

<Dialog
  open={dUpload}
  id="dialog-upload"
  title={lang.dialog.upload.title}
  confirm={`ok`}
  deny={`cancel`}
  onConfirm={()=>{
    dUpload = false;
    store.dispatch({
      type: STATUS_STATE,
      value:1002
    });
  }}
 >

 <Upload
   bind:this={dialogUpload} />


   <LinearProgress {progress} {closed} />

</Dialog>

<!-- DELETE GRAPH -->

<Dialog
  open={dDelete}
  id="dialog-delete"
  title={lang.dialog.delete.title}
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
  title={lang.dialog.settings.title}
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
