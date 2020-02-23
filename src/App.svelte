
<svelte:head>

  <title>{applicationTitle}</title>

</svelte:head>

<script>

  import 'redux';
  import {store} from "./index";
  import {
	RETRIEVE_ITEM,
	APPLICATION_TOGGLE_DARKMODE,
	APPLICATION_TOGGLE_MENU
  } from "./store/actions/application";

  import {
    STATUS_LOAD_BAR
  } from "./store/actions/status";

  import {
    DIALOG_SETTINGS
  } from './store/actions/dialog'

  import {onMount, afterUpdate} from 'svelte';

  import "App.svelte.scss";

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

  import Drawer, {DrawerToggle} from './components/Drawer.svelte';
  import Divider from './components/Divider.Material.svelte';
  import Graph from './components/Graph.svelte';
  import CodeView from './components/CodeView';
  import ColourPicker from "./components/ColourPicker.svelte";

  import {Item, Graphic, Text} from '@smui/list';

  import openFullscreen from './utils/openFullscreen';
  import closeFullscreen from './utils/closeFullscreen';

  import downloadSvg from './utils/downloadSvg';
  import downloadSource from './utils/downloadSource';
  import HoverFab from "./components/HoverFab.svelte";
  import ContentEditor from "./components/ContentEditor.svelte";
  import {setDarkMode} from "./store/actions/darkmode";

  import DialogAdd from "./components/DialogAdd";
  import Dialog from "./components/static/Dialog";
  import Settings from "./components/Settings";
  import Welcome from "./components/Welcome";

  //export let store;
  export let loading;

  let applicationSourceCode = ``;
  let applicationDigraphSource = false;

  let applicationFullscreen = false;
  let applicationDayOrNight = false;
  let applicationCodeView = false;

  let applicationFirstRun = false;
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
  	graph: new Graph({target: document.body}),
  	//hoverFab: new HoverFab({target: document.body})
  	//editors: new ContentEditor({target: document.body})
  };

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

  document.onfullscreenchange = function () {
  	applicationFullscreen = !applicationFullscreen;
  };

  /* TABS TESTING */

  const code_a = require("./store/models/example_chart_a.js").default;
  const code_b =   require("./store/models/example_chart_b.js").default;
  const code_c = require("./store/models/example_chart_c.js").default;
  let tabIndex = 0;

  const forceCode = async (chart) => {
  	tabIndex++;
  	D3Graph.renderDot(chart);
  };

  window.forceCode = forceCode;

  /**
   *
   */

  const toggleCodeView = () => {
  	applicationCodeView = !applicationCodeView
  };

  /**
   * dispatch navigation state
   */

  const toggleMenu = () => {

  	store.dispatch({
  	  type: APPLICATION_TOGGLE_MENU,
  	  navigation: applicationNavigationMenuState
  	});

  };

  /**
   * TODO :: dispatch theme change
   * @returns {Promise<void>}
   */

  const handleDayOrNight = async () => {

  	applicationDayOrNight = !applicationDayOrNight;

  	store.dispatch({
  	  type: APPLICATION_TOGGLE_DARKMODE,
  	  darkMode: applicationDayOrNight
  	});

  };

  /**
   * [handleSettings description]
   * @return {[type]} [description]
   */

  const handleSettings = ()=>{
        store.dispatch({
          type: DIALOG_SETTINGS,
          test:'eh'
        });
  }

  // TODO :: REMOVE

  window.code = '';

  /**
   * [getCode description]
   * @param  {[type]} source [description]
   * @return {[type]}        [description]
   */

  function getCode(source){

    let code = source || applicationSourceCode.data;

  	code = code.split("\n");

  	code = code.map((item, index)=>{
  	  return `${index}. ${item}`;
    });

  	code.shift();
  	code = code.join("\n");

  	localStorage.setObject('code', code);
  	return code;
  }

  /**
   * [getDigraphSource description]
   * @return {[type]} [description]
   */

  const getDigraphSource = () => {

    return getCode(applicationDigraphSource);
  };

  /**
   * svelte lifecycle
   * @return {[type]} [description]
   */

  onMount(async function () {

    applicationDayOrNight = setDarkMode(localStorage.getObject('darkMode'));
    applicationFirstRun = !localStorage.getItem('welcome');

    store.dispatch({
      type: STATUS_LOAD_BAR,
      value:0.1
    });

  	store.subscribe(async () => {

  	  //app.$$.ctx[app.$$.props.loading].reset(0);




//  	  app.$$.ctx[app.$$.props.loading].set(0.3); // cant i just reset(0.3) i forget lol

  	  const {
        application,
        status
  	  } = await store.getState();

      const {
    		action,
    		theme,
    		data,
    		nodes,
    		navigation,
    		title,
    		darkMode
      } = await application;

  	  applicationSourceCode = data;
  	  applicationTheme = theme;

  	  applicationNavigationMenuState = navigation;
  	  applicationTitle = title;

  	  applicationDayOrNight = setDarkMode(darkMode);

  	  //if (applicationDayOrNight)

  	  //applicationReady = true;


      if ((await status).progress<1){
          store.dispatch({
            type: STATUS_LOAD_BAR,
            value:1
          });
      }

  	});

    // if first time logging on
    if (applicationFirstRun){
    if (true){

    }
  } else {

  }


});


  let add;
  const onAdd = () => {

    add = new DialogAdd({target:document.body});

  }

 const notMobile = true; // should have probably used css

</script>

{#if applicationFirstRun}
  <Dialog
    title={``}
    confirm={``}
    deny={``}
    id={`settings-dialog-content`}
    onConfirm={()=>{applicationReady = false;}}
   >
    <Welcome />
  </Dialog>
{/if}


  <TopAppBar {dense} {prominent} {variant} bind:collapsed>

    <!-- Primary Row -->

    <Row class={applicationTheme.primary}>

      <Section>

        <IconButton class="material-icons" on:click={toggleMenu}>{!applicationNavigationMenuState?'menu':'menu_open'}</IconButton>

        <Title class="hidden">{applicationTitle}</Title>

        <!--
        {#if ((tabIndex===0)&&(applicationCodeView===true)&&(applicationDigraphSource===false))}
          <IconButton class="material-icons" aria-label="insert_chart" title="return" on:click={toggleCodeView}>insert_chart</IconButton>
        {/if}

        -->

        {#if ((tabIndex!==0))}

		      <IconButton class="material-icons" aria-label="edit" title="edit" on:click={()=>{forceCode(applicationSourceCode.data)}}>bar_chart</IconButton>

        {/if}

    		<IconButton class="material-icons" aria-label="edit" title="edit" on:click={()=>{forceCode(code_a)}}>bar_chart</IconButton>

    		<IconButton class="material-icons" aria-label="edit" title="edit" on:click={()=>{forceCode(code_b)}}>bar_chart</IconButton>

    		<IconButton class="material-icons" aria-label="edit" title="edit" on:click={()=>{forceCode(code_c)}}>bar_chart</IconButton>

    		<IconButton class="material-icons" aria-label="edit" title="edit" on:click={()=>{forceCode(code_c)}}>add</IconButton>

        {#if (notMobile)}
        {/if}

      </Section>

      <Section align="end" toolbar>

        <IconButton class="material-icons" on:click = {handleSettings}>settings</IconButton>
      <!--
              {#if (notMobile)}

              	<IconButton class="material-icons" on:click = {handleDayOrNight}>{!applicationDayOrNight?'nights_stay':'wb_sunny'}</IconButton>

                <ColourPicker></ColourPicker>

                <IconButton class="material-icons" on:click = {!applicationFullscreen?openFullscreen:closeFullscreen}>{applicationFullscreen?'fullscreen':'fullscreen_exit'}</IconButton>

              {/if}

              {#if (!notMobile)}

                <IconButton class="material-icons" >settings</IconButton>

              {/if}
      -->

      </Section>

    </Row>

    <!-- Secondary Row -->

    <Row class={applicationTheme.primary+"-accent"} id="second-bar" >

      <Section align="start" toolbar>

        {#if (notMobile)}
          {#if ((applicationDigraphSource===false))}
            <IconButton class="material-icons"  on:click={onAdd} aria-label="add">insert_chart</IconButton>
          {/if}

          <Divider></Divider>

                    {#if ((true)&&(applicationDigraphSource===false))}
                    <IconButton class="material-icons" aria-label="Preview SVG source" on:click={()=>{
                    const html = d3.select("#graph0").html();
                    //downloadSource(html);
                    //applicationCodeView=true;
                    applicationDigraphSource=html;}} alt="print">code</IconButton>
                    {/if}

                    {#if ((true)&&(applicationDigraphSource))}
                      <IconButton class="material-icons" aria-label="Preview SVG source" on:click={()=>{
                      applicationCodeView=applicationCodeView;
                      applicationDigraphSource=false;}} alt="print">insert_chart</IconButton>
                    {/if}

        {/if}

        {#if (!notMobile)}
          <IconButton class="material-icons"  on:click={onAdd} aria-label="add">add</IconButton>
        {/if}


        <!--
        <Divider></Divider>

        {#if ((applicationCodeView===false)&&(applicationDigraphSource===false))}
          <IconButton class="material-icons" aria-label="edit" title="edit" on:click={toggleCodeView}>insert_chart</IconButton>
        {/if}
        -->


          <!-- FOR each GRAPH in store.graph.list? -->
          <!-- disable when viewing other  -->
          <HoverFab></HoverFab>
          <!--
        {#if ((tabIndex===0)&&(applicationCodeView===false)&&(applicationDigraphSource===false))}
          <IconButton class="material-icons" aria-label="edit" title="edit" on:click={toggleCodeView}>edit</IconButton>
        {/if}
        -->

      </Section>

      <Section align="end" toolbar>

        {#if (notMobile)}


          <IconButton class="material-icons hidden" aria-label="Print this page" on:click={()=>{
          const html = d3.select("#graph0").html();
          const win = window.open("", "graph0", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
          win.document.body.innerHTML = `<textarea style="width:100%;height:100%;">${html}</textarea>`;}} alt="print">print</IconButton>

          <IconButton class="material-icons hidden" aria-label="Download SVG" on:click={()=>{
          const svg = document.querySelector("svg");
          downloadSvg(svg);}}>file_download</IconButton>

        {/if}

      </Section>

    </Row>

  </TopAppBar>

  <!-- material "fab" moves to position of list item to show details -->
  <!-- potentially move to index ? -->

  <!-- working project node list -->
  <!-- potentially move to index ? -->

  <VirtualList items={applicationDrawerData} let:item>

    <Item href="javascript:void(0)"
      on:mousemove={(evt)=>{evt.preventDefault(); evt.stopPropagation()}}
      on:mouseover={(evt)=>{

        let offset;
        let scrollTop = document.querySelector('body > section > div > aside > div.mdc-drawer__content > nav > svelte-virtual-list-viewport').scrollTop

        store.dispatch({
          type: RETRIEVE_ITEM,
          item: item,
          itemPosition: {x:0, y:(91+evt.target.offsetTop-scrollTop)}
        });

      }}
      on:mouseout={()=>{

        hovering = false;

      }}>

      <!-- thats narsty -->

      <Graphic class="material-icons" aria-hidden="true">{item.icon || "insert_link"}</Graphic>

        {#if hovering==item.name}
        {:else}
          <!--<Graphic class="material-icons" aria-hidden="true">insert_link</Graphic>-->
        {/if}

      <Text>{item.name}</Text>

    </Item>

  </VirtualList>

  <!-- CODE VIEW -->
  <!-- potentially move to index ? -->

  {#if (applicationCodeView||applicationDigraphSource)}
    <CodeView code={(applicationDigraphSource?getDigraphSource():getCode())}></CodeView>
  {/if}

  {#if ((applicationReady))}
{/if}
