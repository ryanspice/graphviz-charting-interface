<script>
  import { onMount } from 'svelte';
  import Select, {Option} from '@smui/select';
  import IconButton from '@smui/icon-button';

  import {APPLICATION_ASSIGN_THEME} from "./store/actions/application";
  import {store} from "./index";

  import colors from './theme/colors';


  let select;

  const selectFocus = function(){
	select.$$.ctx[18].children[2].click();
  };

  const selectChoice = async function(color) {

	store.dispatch({
	  type:APPLICATION_ASSIGN_THEME,
	  data:color
	});

  };

  onMount(()=>{
	select.$$.ctx[18].style.width = "0";
  })

</script>

    <IconButton class="material-icons" on:click={selectFocus}>color_lens</IconButton>

    <Select bind:this={select} enhanced>

        {#each colors as color}

            <Option value={color.name} on:click={()=>{selectChoice(color)}}>

                <div class={"swatch-color " + color.primary}></div>

                <div class={"swatch-color " + color.primary+"-accent"}></div>

            </Option>

        {/each}

    </Select>

    <!-- <pre class="status">Selected: {colorsPreloaded}</pre> -->
