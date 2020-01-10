<script>
  import { onMount } from 'svelte';
  import Select, {Option} from '@smui/select';
  import IconButton from '@smui/icon-button';

  import {APPLICATION_ASSIGN_THEME} from "./store/actions/application";
  import {store} from "./index";


  let colorsPreloaded = '';
  let colors = [
	//{ name: "Red", primary: 'swatch-color-red', secondary: '' },
	{ name: "Pink", primary: 'swatch-color-pink', secondary: '' },
	{ name: "Purple", primary: 'swatch-color-purple', secondary: '' },
	{ name: "Deep Purple", primary: 'swatch-color-deep-purple', secondary: '' },
	{ name: "Indigo", primary: 'swatch-color-indigo', secondary: '' },
	{ name: "Blue", primary: 'swatch-color-blue', secondary: '' },
	{ name: "Light Blue", primary: 'swatch-color-light-blue', secondary: '' },
	{ name: "Cyan", primary: 'swatch-color-cyan', secondary: '' },
	{ name: "Teal", primary: 'swatch-color-teal', secondary: '' },
	{ name: "Green", primary: 'swatch-color-green', secondary: '' },
	{ name: "Light Green", primary: 'swatch-color-light-green', secondary: '' },
	{ name: "Lime", primary: 'swatch-color-lime', secondary: '' },
	{ name: "Yellow", primary: 'swatch-color-yellow', secondary: '' },
	{ name: "Amber", primary: 'swatch-color-amber', secondary: '' },
	{ name: "Orange", primary: 'swatch-color-orange', secondary: '' },
	{ name: "Deep Orange", primary: 'swatch-color-deep-orange', secondary: '' },
	{ name: "Brown", primary: 'swatch-color-brown', secondary: '' }
  ];

  let select;

  let selectFocus = function(){
	select.$$.ctx[18].children[2].click();
  };

  let selectChoice = async function(color) {

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

    <Select bind:this={select} enhanced bind:value={colorsPreloaded} label=""  >

        {#each colors as color}

            <Option value={color.name} selected={colorsPreloaded === color} on:click={()=>{selectChoice(color)}}>

                <div class={"swatch-color " + color.primary}></div>
                <div class={"swatch-color " + color.primary+"-accent"}></div>

            </Option>

        {/each}

    </Select>

    <!-- <pre class="status">Selected: {colorsPreloaded}</pre> -->
