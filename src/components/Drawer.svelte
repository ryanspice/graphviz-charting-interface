<script>

  import 'redux';

  import {
    store
  } from "../index";

  import {
    STATUS_STATE
  } from '../store/actions/status';

  import {
    onMount
  } from 'svelte';

  import './Drawer.svelte.scss';

  import {
    AppContent,
    Content,
    Header,
    Subtitle,
    Scrim
  } from '@smui/drawer';

  import Drawer from './Drawer.Material.svelte';

  import Dialog, {
    Title,
    Actions,
    InitialFocus
  } from '@smui/dialog';

  import Button, {
    Label
  } from '@smui/button';

  import List, {
    Item,
    Text,
    Graphic,
    Separator,
    Subheader
  } from '@smui/list';

  import IconButton from '@smui/icon-button';

  import H6 from '@smui/common/H6.svelte';

  let open = false;
  const a = (t) => {
    open = !open;
  };

  //

  let DragMouse = [0, 0];
  let DragBounds = [48, 1248];
  let DragResize = false;

  let drawerDragX = 58;
  let drawerOffset = localStorage.getObject('drawer_offset') || 0;
  let drawerCssClass = '';

  /**
   * return {X,Y} of mouse based on MouseEvent
   * @param event
   */

  const handleMouseMove = (event) => {

    return DragMouse = {
      x: event.x,
      y: event.y
    };
  };

  /**
   * assigns width to
   * @param event
   */

  const handleDragResize = (event) => {

    if (!event)
      return;

    let ClientX = (event.x || event.screenX || event.clientX);
    let x = ClientX || drawerDragX;

    if (x >= DragBounds[0])
      if (x <= DragBounds[1])
        if (DragResize) {
          drawerDragX = x + 6;
        }
    if (drawerDragX < 92)
      drawerDragX = 58;

    if (DragResize)
      requestAnimationFrame(() => {
        handleDragResize(DragMouse)
      });

    drawerDragX = x;

    document.querySelector(':root').style.setProperty('--view-x', x+'px');
    localStorage.setItem('--view-x',x);

  };

  /**
   * initialize
   * @param event
   */

  const handleDragStart = (event) => {

    if (!DragResize) {

      DragResize = true;

      requestAnimationFrame(() => {
        handleDragResize(DragMouse)
      });

      drawerCssClass = 'drawer-extend-1 drag mdc-drawer--open';

    }

  };

  /**
   * stop drag
   */

  const handleDragStop = () => {

    requestAnimationFrame(() => {

      DragResize = false;

      drawerCssClass.replace('drag', '');

      if (drawerDragX < 92)
        drawerDragX = 58;

    });

  };

  /**
   *
   */

  const handleDoubleClick = () => {

    drawerOffset++;

    if (drawerOffset > 2)
      drawerOffset = 0;

    drawerCssClass = `drawer-extend-${drawerOffset} mdc-drawer--open`;

    store.dispatch({
      type: "APPLICATION_ASSIGN_DRAWER_OFFSET",
      value: drawerOffset
    });

  };

  /**
   *
   */

  onMount(() => {

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleDragStop);
    //document.addEventListener('dblclick', handleDoubleClick);

    let x = localStorage.getItem('--view-x') || 0;
    handleDragResize({x:x})

    store.subscribe(async () => {

  	  const {
        application
  	  } = await store.getState();

      const {
    		navigation
      } = await application;

      open = navigation;

    })

  });

</script>

<section>

  <div id="drawer-container" on:dblclick = {handleDoubleClick}>

    <Drawer variant="modal" class={drawerCssClass} width={drawerDragX} bind:open={open}>

      <!-- DRAGGABLE AREA -->

      <div id="drawer-resize-control" on:mousedown = {handleDragStart} ></div>

      <!-- VIRTUAL LIST GETS APPENDED HERE -->

      <Content>

        <List></List>

      </Content>

      <!-- DELETE GRAPH BUTTON -->

      <IconButton style="background:black;position:absolute;bottom:48px;z-index:2;left:4px" class="material-icons" aria-label="" title="" on:click={async   () => {

          store.dispatch({
            type: STATUS_STATE,
            value:1090
          });

        }}>delete_forever</IconButton>

    </Drawer>

    <Scrim />

  </div>

</section>
