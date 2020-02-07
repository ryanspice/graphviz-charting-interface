<script>

  import {Item, Graphic, Text} from '@smui/list';
  import "./ContentEditor.svelte.scss"

  let editor = [
  ];
  let a = function(i){
    /// TODO :: figure out how to get svelt to update the arrray ?????
  };

</script>

<section id="editor-content">

  {#each editor as { id, name, value }, i}

    <div class={"editor "+(i++)} >

      <h4>
        {i} : {name}

        <Graphic on:click={()=>{a(i)}}
         style="cursor:pointer;float:right;pointer-event:all;" class="material-icons" aria-hidden="true" on:click = {()=>{}}>close</Graphic>

      </h4>

      <Text contenteditable>
        {value}
      </Text>

    </div>

  {/each}

</section>
