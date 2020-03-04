
<script>
  import Fab, {Label, Icon} from '@smui/fab';
  import FormField from '@smui/form-field';
  import Checkbox from '@smui/checkbox';

  import "./AdditionFab.svelte.scss"

  let clicked = 0;
  let exited = false;
  let exited2 = false;

  let hover = false;
  let hoverOverride = false;
  let controls = [
    {icon:'insert_chart'},
    {icon:'show_chart'},
    {icon:'link'},
  ];
</script>

<section id="addition-fab" on:mouseleave={()=>{
  hover = hoverOverride || false;
  }}>

  <Fab class="addition-fab" color="primary" on:click={() => {
      //hover = !hover;
      hoverOverride = !hoverOverride;
    }} on:mouseenter={()=>{
      hover = hoverOverride || true;
    }} on:blur={()=>{
      //hover = false;
    }}>

      <Icon class="material-icons">{(!hover || !hoverOverride)?'add':'remove'}</Icon><!--<Label hidden></Label>-->

  </Fab>

  {#if hover}

  	{#each controls as control, i}

      <Fab class="addition-fab extra" color="primary" on:click={() => {

        }}>

          <Icon class="material-icons">{control.icon}</Icon>

      </Fab>

  	{/each}

  {/if}

  </section>
