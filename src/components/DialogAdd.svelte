<script>

  import {onMount} from 'svelte';

  import New from "./New.svelte";

  export let title = 'Add';

  export let destroy = true;
  export let content = `
    <input type="text" placeholder="a"></input>
    <br/>
    ->
    <br/>
    <input type="text" placeholder="b"></input>
  `;

  export let confirm = "OK";
  export let deny = "";

  onMount(()=>{



  })

</script>

<New
  title={title}
  destroy={destroy}
  content={content}
  confirm={confirm}
  deny={deny}
  open={true}
  >

</New>
