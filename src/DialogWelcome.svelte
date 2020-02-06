<script>

  import {onMount} from 'svelte';

  import New from "New.svelte";
  import "DialogWelcome.svelte.scss";

  export let title = 'Welcome!';

  export let destroy = true;
  export let content = 'Thank you for being one of the first to test out my GraphViz based applicaiton for editing and manipulating GraphViz digraphs. If you like to see more of my work see: <a href="https://www.ryanspice.com/">ryanspice.com</a>';

  export let confirm = "OK";
  export let deny = "";


</script>

<New
  title={title}
  destroy={destroy}
  content={content}
  confirm={confirm}
  deny={deny}
  >

</New>
