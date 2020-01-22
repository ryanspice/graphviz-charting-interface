
<script>

  import { afterUpdate } from 'svelte';
  import {Item, Graphic, Text} from '@smui/list';

  import {store} from "./index";
  import {APPLICATION_LOAD} from "./store/actions/application";


  let self;
  let hidden = true;
  let y = -200;
  let data = {
    title:``
  };


  function handleMouseOut() {

	hidden = true;

  }
  function handleMouseIn() {

	hidden = false;

  };

  /**/

  afterUpdate(async () => {
    store.subscribe(async ()=>{
      const {itemPosition,item} = await store.getState();
      hidden = false;
      y = itemPosition.y;

      data = item;
    })
  });

</script>

<Item id="hovering-fab" bind:this={self} style={(hidden)?'display:none':('top:'+y+'px;width:'+data.name.length*8)} href="javascript:void(0)" on:mouseout={handleMouseOut}>

  <Graphic class="material-icons" aria-hidden="true" on:click = {()=>{}}>close</Graphic>

  <Text>{data.name}</Text>

</Item>
