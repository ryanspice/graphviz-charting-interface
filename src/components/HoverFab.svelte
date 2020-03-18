
<script>

  import { onMount } from 'svelte';
  import {Item, Graphic, Text} from '@smui/list';

  import {store} from "../index";
  import {APPLICATION_LOAD} from "../store/actions/application";

  import "./HoverFab.svelte.scss";

  let applicationTheme = '';
  let hidden = true;
  let y = -200;
  let data = {
    name:``
  };

  /**/

  async function getApplication(){

	  const {
      application
	  } = await store.getState();

    return await application;
  }

  /**/

  function handleMouseOut() {
  	hidden = true;
  	y = -200;
  };

  /**/

  function handleMouseIn() {
  	hidden = false;
  };

  /**
   * common onSubscribe method
   * @return {[type]} [description]
   */

  async function onSubscribe(){

    const {
      theme,
      itemPosition,
      item,
    } = await getApplication();

    if (theme)
	   applicationTheme = theme.primary;

    hidden = false;

    if (item){
      data = item;
    }

        if (!itemPosition)
        if (!itemPosition.y)
          return;
        y = itemPosition.y-48 || -200;
  };

  /**
   * svelte onMount
   * @type {[type]}
   */

  onMount(async () => {

	  const {
      status
	  } = await store.getState();

    const {
  		theme,
    } = getApplication();

    if (theme)
  	 applicationTheme = theme.primary;


    store.subscribe(onSubscribe);

  });

  /**
   * [handleMouseScroll description]
   * @param  {[type]} evt [description]
   * @return {[type]}     [description]
   */

  const handleMouseScroll = (evt)=>{

    	hidden = true;
    	y = -200;
      evt.preventDefault();
  }
</script>

<Item
  id="hovering-fab"
  class={applicationTheme}
  style={(hidden)?'display:none':('top:'+y+'px;width:'+data.name.length*8)}
  href="javascript:void(0)"
  on:scroll={handleMouseScroll}
  on:mouseout={handleMouseOut} >

  <Graphic
    class="material-icons"
    aria-hidden="true"
    on:click = {()=>{

    }}>open_in_new</Graphic>

  <Text>{data.name}</Text>

</Item>
