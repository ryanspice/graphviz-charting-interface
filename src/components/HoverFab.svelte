
<script>

  import { onMount } from 'svelte';
  import {Item, Graphic, Text} from '@smui/list';

  import {store} from "../index";
  import {APPLICATION_LOAD} from "../store/actions/application";

  import "./HoverFab.svelte.scss";


  let applicationTheme = '';
  let self;
  let hidden = true;
  let y = -200;
  let data = {
    name:``
  };


  function handleMouseOut() {

	hidden = true;
	y = -200;

  }
  function handleMouseIn() {

	hidden = false;

  };

  /**/

  onMount(async () => {

  	const {theme} = await store.getState();

  	applicationTheme = theme.primary;

    store.subscribe(async ()=>{

  	  const {itemPosition,item,theme} = await store.getState();

      if (theme)
  	   applicationTheme = theme.primary;

      hidden = false;

      y = itemPosition.y;

      if (item)
        data = item;

    });

  });

</script>

<Item
  id="hovering-fab"
  class={applicationTheme}
  style={(hidden)?'display:none':('top:'+y+'px;width:'+data.name.length*8)}
  href="javascript:void(0)"
  on:mouseout={handleMouseOut} >

  <Graphic
    class="material-icons"
    aria-hidden="true"
    on:click = {()=>{
       
    }}>open_in_new</Graphic>

  <Text>{data.name}</Text>

</Item>
