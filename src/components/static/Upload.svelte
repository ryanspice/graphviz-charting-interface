<script>

  import {
    onMount,
    afterUpdate
  } from 'svelte';

  import {store} from "../../index";

  import {
    STATUS_STATE
  } from '../../store/actions/status';

  let eInput;

  async function handleFiles(input) {

    const files = input.files;

    if (files.length>1){
      log.warn('currently there is only support for 1 file to be uploaded');
    }

    try {

      const fileURL = await window.URL.createObjectURL(files[0]);

      let fileContent = await fetch(fileURL);
      fileContent = await fileContent.text();

      await store.dispatch({
        type: STATUS_STATE,
        value:1002,
        content:fileContent
      });

      window.URL.revokeObjectURL(fileURL);

    } catch(e) {

      log.error(e);

    }

  }

  export let click = function(){
    eInput.click();
  };

  export let callback = async function(){

    await handleFiles(eInput);

   return true;
  };

  onMount(()=>{
  })

</script>

<form enctype="multipart/form-data" action="/upload/file" method="post" hidden>

  <input bind:this = {eInput} id="welcome-file-upload" type="file" on:change={callback()} />

</form>
