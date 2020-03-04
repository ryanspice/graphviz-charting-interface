<script>

  import 'redux';
  import {store} from "../index";

  import './Header.svelte.scss';

  import {
	RETRIEVE_ITEM,
	APPLICATION_TOGGLE_DARKMODE,
	APPLICATION_TOGGLE_MENU
} from "../store/actions/application";

  import {
    STATUS_LOAD_BAR,
    STATUS_SETTINGS
  } from "../store/actions/status";

  import {
    DIALOG_SETTINGS
  } from '../store/actions/dialog'

  import {
    onMount,
    afterUpdate
  } from 'svelte';

  import IconButton from '@smui/icon-button';

  import TopAppBar, {
    Row,
    Section,
    Title,
    FixedAdjust,
    DenseFixedAdjust,
    ProminentFixedAdjust,
    ShortFixedAdjust
  } from '@smui/top-app-bar';

    import {Item, Graphic, Text} from '@smui/list';

      import openFullscreen from '../utils/openFullscreen';
      import closeFullscreen from '../utils/closeFullscreen';

    import {setDarkMode} from "../store/actions/darkmode";
    import Divider from './Divider.Material.svelte';
    //import HoverFab from "./HoverFab.svelte";
    import ColourPicker from "./ColourPicker.svelte";

    let showWizard;
      let applicationSourceCode = ``;
      let applicationDigraphSource = false;

      let applicationFullscreen = false;
      let applicationDayOrNight = false;
      let applicationCodeView = false;

      let applicationFirstRun = false;
      let applicationTheme = {
    	primary: ""
      };

      let applicationNavigationMenuState = true;

      let applicationDrawerData = [
    	{name: '', number: ''}
      ];
      let dense = true;
      let prominent = false;
      let variant = 'short';
      let collapsed = false;
      let applicationTitle;
      let Adjust = FixedAdjust;

      const notMobile = true; // should have probably used css
      Adjust = ShortFixedAdjust;

      let tabIndex = 0;


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
         * dispatch navigation state
         */

        const toggleMenu = () => {

        	store.dispatch({
        	  type: APPLICATION_TOGGLE_MENU,
        	  navigation: applicationNavigationMenuState
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

        const onAdd = ()=>{};

        onMount(async function () {

         // applicationDayOrNight = setDarkMode(localStorage.getObject('darkMode'));
         applicationFirstRun = localStorage.getItem('welcome');

         store.dispatch({
           type: STATUS_LOAD_BAR,
           value:0.1
         });

         store.subscribe(async () => {

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

           const {
             options,
             progress,
           } = await status;

           applicationTheme = theme;

           showWizard = options.showWizard;

           applicationSourceCode = data;

           applicationNavigationMenuState = navigation;
           //applicationTitle = title;

           // applicationDayOrNight = setDarkMode(darkMode);

            return;
         });

        });



</script>


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
              {#if (notMobile)}

              	<IconButton class="material-icons" on:click = {handleDayOrNight}>{!applicationDayOrNight?'nights_stay':'wb_sunny'}</IconButton>

                <ColourPicker></ColourPicker>

                <IconButton class="material-icons" on:click = {!applicationFullscreen?openFullscreen:closeFullscreen}>{applicationFullscreen?'fullscreen':'fullscreen_exit'}</IconButton>

              {/if}
              <!--

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
          <!-- <HoverFab></HoverFab> -->
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
