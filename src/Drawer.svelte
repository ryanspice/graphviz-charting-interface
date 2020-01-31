<script>

  import 'redux';
  import {store} from "./index";
  import { onMount } from 'svelte';

  import 'Drawer.svelte.scss';

  import {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Drawer from 'Drawer.Material.svelte';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  import IconButton from '@smui/icon-button';
  import H6 from '@smui/common/H6.svelte';

  let applicationDrawer;


  let open = false;
  function calculate(){
  //console.log('eh')
  }
  let clicked = 'nothing yet';
  let myDrawer;
  let myDrawerOpen = false;
  let active = 'Gray Kittens';
  let active2 = 'Inbox';
  function setActive(value) {
    active = value;
    myDrawerOpen = false;
  }
  function setActive2(value) {
    active2 = value;
    open = false;
  }
  function toggleActive(value) {
    open = !open;
  }
  const a = (t) => {
    open = !open;
  };

  let DragMouse = [0,0];
  let DragBounds = [48,1248];
  let DragResize = false;

  let drawerDragX = 58;
  let drawerOffset = localStorage.getObject('drawer_offset') || 0;
  let drawerCssClass = '';

  /**
   * return {X,Y} of mouse based on MouseEvent
   * @param event
   */

  const handleMouseMove = (event)=> {

	return DragMouse = {x:event.x,y:event.y};
  };

  /**
   * assigns width to
   * @param event
   */

  const handleDragResize = (event)=> {

    if (!event)
      return;

    let ClientX = (event.x || event.screenX || event.clientX);
    let x = ClientX || drawerDragX;

    if (x>=DragBounds[0])
    if (x<=DragBounds[1])
    if (DragResize){
      drawerDragX = x + 5;
    }
    if (drawerDragX<92)
      drawerDragX = 58;

    if (DragResize)
	  requestAnimationFrame(()=>{handleDragResize(DragMouse)});

    drawerDragX = x;

  };

  /**
   * initialize
   * @param event
   */

  const handleDragStart = (event)=> {

    if (!DragResize){

        DragResize = true;

        requestAnimationFrame(()=>{handleDragResize(DragMouse)});

        drawerCssClass = 'drawer-extend-1 drag mdc-drawer--open';

    }

  };

  /**
   * stop drag
   */

  const handleDragStop = () => {

	requestAnimationFrame(()=>{

	  DragResize = false;

      drawerCssClass.replace('drag','');

      if (drawerDragX<92)
        drawerDragX = 58;

	});
  };

  /**
   *
   */

  const handleDoubleClick = () => {

    drawerOffset++;

    if (drawerOffset>2)
      drawerOffset = 0;

    drawerCssClass=`drawer-extend-${drawerOffset} mdc-drawer--open`;

    store.dispatch({
      type:"APPLICATION_ASSIGN_DRAWER_OFFSET",
      value:drawerOffset
    });

  };

  /**
   *
   */

  onMount(()=>{

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleDragStop);
    //document.addEventListener('dblclick', handleDoubleClick);

    store.subscribe(async () => {

      const {
        navigation
      } = await store.getState();

      open = navigation;

    })

  });

</script>

<section>

  <div id="drawer-container" on:dblclick = {handleDoubleClick}>

    <Drawer variant="modal" bind:this={applicationDrawer} class={drawerCssClass} width={drawerDragX} bind:open={open}>

      <div id="drawer-resize-control"
           on:mousedown = {handleDragStart}
      ></div>

       <Header style="color:white;" >

         <IconButton class="material-icons" style="position:relative;left:-200px;" on:click={()=>{
             window.temp.$$.ctx[2]()
        }}>add</IconButton>

      </Header>

      <Content>

        <List>

          <!--
          <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>

              <Graphic class="material-icons" aria-hidden="true">recent_actors</Graphic>

              <Text>Recents</Text>

          </Item>

          <Item href="javascript:void(0)" on:click={() => setActive2('Inbox')} activated={active2 === 'Inbox'}>

              <Graphic class="material-icons" aria-hidden="true">about</Graphic>

              <Text>About</Text>

          </Item>


          <Separator nav />
          <Subheader component={H6} hidden>
            <IconButton class="material-icons" aria-label="">link</IconButton>

            <IconButton class="material-icons" aria-label="">web_asset</IconButton>
            <IconButton class="material-icons" aria-label="">code</IconButton>
            <IconButton class="material-icons" aria-label="">info</IconButton>
          </Subheader>
          <Item href="javascript:void(0)" on:click={() => setActive2('Family')} activated={active2 === 'Family'}>
            <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
            <Text>Family</Text>
          </Item>

          <Item href="javascript:void(0)" on:click={() => setActive2('Friends')} activated={active2 === 'Friends'}>
            <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
            <Text>Friends</Text>
          </Item>

          <Item href="javascript:void(0)" on:click={() => setActive2('Work')} activated={active2 === 'Work'}>
            <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
            <Text>Work</Text>
          </Item>

        -->

        </List>

      </Content>

      <IconButton style="position:absolute;bottom:100px;z-index:2;left:4px" class="material-icons" aria-label="" title="" on:click={()=>{}}>delete_forever</IconButton>

    </Drawer>

    <!-- TODO :: REMOVE? -->

    <Scrim style="display: none"/>

    <!-- TODO :: REMOVE? -->

    <AppContent class="app-content" style="display: none">

        <main class="main-content" hidden>

          <Button on:click={a} ><Label>Toggle Drawer</Label></Button>

        </main>

    </AppContent>

  </div>

</section>

<style>

</style>
