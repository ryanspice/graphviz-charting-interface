<script>

  import {store} from "../../index";

  import {
    STATUS_STATE
  } from '../../store/actions/status';

  let eInput;

  let name;
  let size;


  /**
   * dispatches uploaded files code to store
   * @param  {file} input .graphviz files
   */

  async function handleFiles(input) {

    const files = input.files;

    if (files.length>1){
      log.warn('currently there is only support for 1 file to be uploaded');
    }

    // TODO: multi file support
    let i = 0;

    try {
        console.log(files[i])
       name = files[i].name;
       size = files[i].size;
      const fileURL = await window.URL.createObjectURL(files[i]);
      const fileContent = await fetch(fileURL);

      await store.dispatch({
        type: STATUS_STATE,
        value:1002,
        content: await fileContent.text()
      });

      window.URL.revokeObjectURL(fileURL);

    } catch(e) {

      await store.dispatch({
        type: STATUS_STATE,
        value:9000,
        error:e
      });

    }

  };

  /**
   *
   */

  export let click = function(){

    eInput.click();

  };

  /**
   *
   */

  export let callback = async function(){

    await handleFiles(eInput);

  };

</script>

 {#if name}

  <div>

    {name} - {size}kb

  </div>

{/if}

<form enctype="multipart/form-data" action="/upload/file" method="post" hidden>

  <input bind:this = {eInput} id="welcome-file-upload" type="file" on:change={callback()} />

</form>
