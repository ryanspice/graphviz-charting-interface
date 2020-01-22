
<svelte:head>

  <title>{applicationTitle}</title>

</svelte:head>

<script>

  import 'redux';
  import {store} from "./index";
  import {
	RETRIEVE_ITEM,
    APPLICATION_TOGGLE_MENU
  } from "./store/actions/application";

  import {afterUpdate} from 'svelte';

  import TopAppBar, {
	Row,
	Section,
	Title,
	FixedAdjust,
	DenseFixedAdjust,
	ProminentFixedAdjust,
	ShortFixedAdjust
  } from '@smui/top-app-bar';
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import IconButton from '@smui/icon-button';

  import Drawer, {DrawerToggle} from './Drawer.svelte';
  import Graph from './Graph.svelte';
  import CodeView from './CodeView';
  import ColourPicker from "./ColourPicker.svelte";

  import {Item, Graphic, Text} from '@smui/list';

  import openFullscreen from './utils/openFullscreen';
  import closeFullscreen from './utils/closeFullscreen';

  import downloadSvg from './utils/downloadSvg';
  import downloadSource from './utils/downloadSource';
  import HoverFab from "./HoverFab.svelte";

  let applicationSourceCode = ``;
  let applicationDigraphSource = false;

  let applicationFullscreen = false;
  let applicationCodeView = false;

  let applicationReady = false;
  let applicationTheme = {
	primary: ""
  };

  let applicationNavigationMenuState = true;

  let applicationDrawerData = [
	{name: '', number: ''}
  ];

  const components = {
	drawer: new Drawer({target: document.body}),
	graph: new Graph({target: document.body})
  };

  const getItemStyle = offset => "top:" + offset + "px;left:0px;display:;pointer-events:auto ;  border-radius: 4px; background:#892787;";

  let hoverFab;
  let hovering = false;

  let dense = true;
  let prominent = false;
  let variant = 'short';
  let collapsed = false;
  let applicationTitle;
  let Adjust = FixedAdjust;

  Adjust = ShortFixedAdjust;

  window.temp = components.drawer;

  window.updateList = function (incoming) {
	applicationDrawerData = incoming;
  };

  /*
  window.onscroll = (evt)=>{
    document.children[0].setAttribute('data-scroll',Math.round(window.scrollY));
  };
 */

  document.onfullscreenchange = function () {
	applicationFullscreen = !applicationFullscreen;
  };

  const toggleCodeView = () => {
	applicationCodeView = !applicationCodeView
  };

  const toggleMenu = () => {

	store.dispatch({
	  type: APPLICATION_TOGGLE_MENU,
	  navigation: applicationNavigationMenuState
	});

  };

  afterUpdate(function () {

	store.subscribe(async () => {

	  const {
		action,
		theme,
		data,
		nodes,
		navigation,
		title
	  } = await store.getState();

	  applicationSourceCode = data;
	  applicationTheme = theme;
	  applicationReady = true;
	  applicationNavigationMenuState = navigation;
	  applicationTitle = title;

	});

  });

</script>

{#if applicationReady}

  <TopAppBar {dense} {prominent} {variant} bind:collapsed>

    <Row class={applicationTheme.primary}>

      <Section>

        <IconButton class="material-icons" on:click={toggleMenu}>{!applicationNavigationMenuState?'menu':'menu_open'}</IconButton>

        <Title>{applicationTitle}</Title>

      </Section>

      <Section align="end" toolbar>

        <ColourPicker></ColourPicker>

        <IconButton class="material-icons" on:click = {!applicationFullscreen?openFullscreen:closeFullscreen}>{applicationFullscreen?'fullscreen':'fullscreen_exit'}</IconButton>

      </Section>

    </Row>

    <Row class={applicationTheme.primary+"-accent"}>

      <Section align="start" toolbar>

        {#if ((applicationDigraphSource===false))}
          <IconButton class="material-icons" aria-label="add">add</IconButton>
        {/if}
        {#if ((applicationCodeView===false)&&(applicationDigraphSource===false))}
          <IconButton class="material-icons" aria-label="edit" title="edit" on:click={toggleCodeView}>edit</IconButton>
        {/if}
        {#if ((applicationCodeView===true)&&(applicationDigraphSource===false))}
          <IconButton class="material-icons" aria-label="insert_chart" title="return" on:click={toggleCodeView}>insert_chart</IconButton>
        {/if}

      </Section>

      <Section align="end" toolbar>

  {#if ((true)&&(applicationDigraphSource===false))}
        <IconButton class="material-icons" aria-label="Preview SVG source" on:click={()=>{
        const html = d3.select("#graph0").html();
        //downloadSource(html);
        //applicationCodeView=true;
        applicationDigraphSource=html;
}} alt="print">code</IconButton>
  {/if}
        {#if ((true)&&(applicationDigraphSource))}
          <IconButton class="material-icons" aria-label="Preview SVG source" on:click={()=>{
          applicationCodeView=applicationCodeView;
          applicationDigraphSource=false;
}} alt="print">insert_chart</IconButton>
        {/if}

        <IconButton class="material-icons hidden" aria-label="Print this page" on:click={()=>{
        const html = d3.select("#graph0").html();
        const win = window.open("", "graph0", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
        win.document.body.innerHTML = `<textarea style="width:100%;height:100%;">${html}</textarea>`;
}} alt="print">print</IconButton>

        <IconButton class="material-icons" aria-label="Download SVG" on:click={()=>{
        const svg = document.querySelector("svg");
        downloadSvg(svg);
}}>file_download</IconButton>

      </Section>

    </Row>

  </TopAppBar>

  <!--
  should probably redo this to use the store so its not doing what we all know we shouldnt
  -->

  <!-- material "fab" moves to position of list item to show details -->
  <HoverFab></HoverFab>
  <!--

  <Item id="hovering-fab" bind:this={hoverFab} style="" href="javascript:void(0)"  on:mouseout={()=>{
    hovering = false;
    if (hovering==false){
      hoverFab.$$.ctx[23].style = getItemStyle("-200") + "display:none;";
      return;
    }
  }}>

    <Graphic class="material-icons" aria-hidden="true" on:click = {()=>{}}>close</Graphic>

    <Text></Text>

  </Item>
   -->

  <!-- working project node list -->

  <VirtualList items={applicationDrawerData} let:item>

    <Item href="javascript:void(0)"
      on:mousemove={(evt)=>{evt.preventDefault(); evt.stopPropagation()}}
      on:mouseover={(evt)=>{

        let offset;
        let scrollTop = document.querySelector('body > section > div > aside > div.mdc-drawer__content > nav > svelte-virtual-list-viewport').scrollTop

        store.dispatch({
          type: RETRIEVE_ITEM,
          item: item,
          //itemPosition: {x:0, y:getItemStyle(91+evt.target.offsetTop-scrollTop)}
          itemPosition: {x:0, y:(91+evt.target.offsetTop-scrollTop)}
        });

      }}
      on:mouseout={()=>{

        hovering = false;

      }}
    >

      <!-- thats narsty -->

      <Graphic class="material-icons" aria-hidden="true">{item.icon || "insert_link"}</Graphic>

        {#if hovering==item.name}
        {:else}
          <!--<Graphic class="material-icons" aria-hidden="true">insert_link</Graphic>-->
        {/if}

      <Text>{item.name}</Text>

    </Item>

  </VirtualList>

  {#if (applicationCodeView||applicationDigraphSource)}

    <CodeView code={applicationDigraphSource?applicationDigraphSource:applicationSourceCode}></CodeView>

  {/if}

{/if}
