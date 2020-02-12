<script>

  import {onMount} from 'svelte';

  import New from "./New.svelte";
  import "./DialogWelcome.svelte.scss";
  import Upload from "./static/Upload.svelte";

  export let title = 'Welcome!';
  export let destroy = true;
  export let content = `Thank you for being one of the first to test out my GraphViz based applicaiton for editing and manipulating GraphViz digraphs. If you like to see more of my work see: <a href="https://www.ryanspice.com/">ryanspice.com</a><br/>

  <br/>
  <br/>

  <div onclick="document.getElementById('welcome-file-upload').click()">
    <i class="material-icons large" disabled>
    open_in_browser
    </i><br/>
  Upload</div>

  <div>
    <i class="material-icons large" disabled>
    create
    </i><br/>
  Create</div>
<br/>
  <div style="width:100%;">
    <i class="material-icons large" >
    graphic_eq
    </i><br/>
  Demo</div>

  `;

  export let confirm = false;
  export let deny = false;


  onMount(async ()=>{
    await new Upload({
      target: document.body
    });

  })

</script>

<New
  title={title}
  destroy={destroy}
  content={content}
  confirm={confirm}
  deny={deny}
  open=true
  >

</New>
