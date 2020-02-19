<script>

  export let callback = function(){

   return true;
  };

</script>

<form enctype="multipart/form-data" action="/upload/file" method="post" hidden>

  <input id="welcome-file-upload" type="file" on:change={callback()} />

</form>
