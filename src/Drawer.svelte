<script>
  import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
  import Button, {Label} from '@smui/button';
  import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
  import IconButton from '@smui/icon-button';
  import H6 from '@smui/common/H6.svelte';

  import Graph from './Graph.svelte';

  let myDrawer2;


  let open = true;
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
    //console.log(t);
    open = !open; };


  let DragMouse = [0,0];
  let DragBounds = [48,1248];
  let DragResize = false;
  let DragX = 0;

  /**
   * return {X,Y} of mouse based on MouseEvent
   * @param event
   */

  const handleMouseMove = (event)=> {
	return DragMouse = {x:event.x,y:event.y};
  };

  /**
   * assigns width to (TODO: fix ref) drawer
   * @param event
   */

  const handleDragResize = (event)=> {

    if (!event)
      return;

    let ClientX = (event.x || event.screenX || event.clientX);
    let x = ClientX || DragX;

    if (x>=DragBounds[0])
    if (x<=DragBounds[1])
    if (DragResize)
	    document.querySelector('body > section > div > aside').style.width = `${x+5}px`;

    if (DragResize)
	  requestAnimationFrame(()=>{handleDragResize(DragMouse)});
	DragX = x;
  };

  /**
   * initialize
   * @param event
   */

  const handleDragStart = (event)=> {

    if (!DragResize){
        DragResize = true;
        requestAnimationFrame(()=>{handleDragResize(DragMouse)});
    }

  };

  /**
   * stop drag
   */

  const handleDragStop = () => {

	requestAnimationFrame(()=>{
	  DragResize = false;
	});
  };

  /**
   * stop drag
   */

  const handleDoubleClick = () => {

    const x = document.querySelector('body > section > div > aside').style.width.replace('px','');

	requestAnimationFrame(()=>{


	  if (x<100)
	    document.querySelector('body > section > div > aside').style.width = `${600}px`;
	  else
	  if (x>256)
	    document.querySelector('body > section > div > aside').style.width = `${256}px`;
	  else
	    document.querySelector('body > section > div > aside').style.width = `${58}px`;
	});

  };

  /** document events */

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleDragStop);
  document.addEventListener('dblclick', handleDoubleClick);

</script>

<section>

  <div class="drawer-container">

    <Drawer variant="modal" bind:this={myDrawer2} bind:open={open}>

      <div id="drawer-resize-control"
           on:mousedown = {handleDragStart}
           on: = {handleDragStart}
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

    </Drawer>

    <Graph channel={"home"} calculate={()=>{
      console.log('calculate')
    }} />

    <Scrim />

    <AppContent class="app-content">

        <main class="main-content" hidden>

          <Button on:click={a} ><Label>Toggle Drawer</Label></Button>

        </main>

    </AppContent>

  </div>

</section>

<style>

</style>
