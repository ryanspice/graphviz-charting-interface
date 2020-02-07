<script>
import 'redux';
import {
  store
} from "../index";
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

let confirmation;
let confirmationDialog = {
  title: ``,
  text: ``,
  clicked: null,
  confirm: () => {},
  deny: () => {}
};
const setConfirmation = (obj) => {
  Object.assign(confirmationDialog, obj);
}

//

let applicationDrawer;


let open = false;

function calculate() {
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
        drawerDragX = x + 5;
      }
  if (drawerDragX < 92)
    drawerDragX = 58;

  if (DragResize)
    requestAnimationFrame(() => {
      handleDragResize(DragMouse)
    });

  drawerDragX = x;

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

      <!-- DRAGGABLE AREA -->

      <div id="drawer-resize-control" on:mousedown = {handleDragStart} ></div>

      <!-- VIRTUAL LIST GETS APPENDED HERE -->

      <Content>

        <List></List>

      </Content>

      <!-- CONFIRMATION DIALOG -->

      <Dialog bind:this={confirmation} aria-labelledby="simple-title" aria-describedby="simple-content">

        <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
        <Title>

          {confirmationDialog.title}

        </Title>

        <Content>

          {confirmationDialog.text}

        </Content>

        <Actions>

          <Button on:click={confirmationDialog.confirm}>

            <Label>No</Label>

          </Button>

          <Button on:click={confirmationDialog.deny}>

            <Label>Yes</Label>

          </Button>

        </Actions>

      </Dialog>

      <!-- DELETE GRAPH BUTTON -->

      <IconButton style="position:absolute;bottom:96px;z-index:2;left:4px" class="material-icons" aria-label="" title="" on:click={async   () => {

        confirmationDialog = await {
          title:`Delete {this} Graph?`,
          text:``,
          confirm:()=>{
            // TODO :: DISPATCH EVENT TO REMOVE CURRENT TABLE
          },
          deny:()=>{}
        };

        await confirmation.open();

        }}>delete_forever</IconButton>

    </Drawer>

    <!-- TODO :: REMOVE? -->

    <Scrim style="display: none"/>

    <!-- Content that exists East of the Drawer ::: Graph was here, maybe it'll be better for resizing? TODO :: REMOVE? -->

    <AppContent class="app-content" style="display: none">

    </AppContent>

  </div>

</section>
