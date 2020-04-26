<script>

    import {
        RETRIEVE_ITEM,
        APPLICATION_TOGGLE_DARKMODE,
        APPLICATION_TOGGLE_MENU
    } from "../store/actions/application";

    import {
        STATUS_ADD,
        STATUS_LOAD_BAR,
        STATUS_SETTINGS,
        STATUS_STATE,
    } from "../store/actions/status";

    import {
        THEME_CYCLE_MODE,
    } from "../store/actions/theme";

    import {
        DIALOG_SETTINGS,
    } from '../store/actions/dialog'

    import {
        onMount,
        afterUpdate,
    } from 'svelte';

    import HeaderButton from './HeaderButton.svelte';

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

    import Divider from './overwrite/Divider.Material.svelte';

    import ColourPicker from "./ColourPicker.svelte";

    import 'redux';


    import {store} from "../index";

    import './Header.svelte.scss';

    let showWizard;
    let applicationSourceCode = ``;
    let applicationDigraphSource = false;

    let applicationFullscreen = false;
    let applicationDayOrNight = false;
    let applicationCodeView = false;

    let applicationFirstRun = false;

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
    let screen;

    let toggleCodeView = () => {
    };

    /* Store Variables for HTML */

    let _files_ = [];
    let _mode_ = 'auto';

    /**
     * dispatch day and night change
     * @returns {Promise<void>}
     */

    const handleDayOrNight = async () => {

        store.dispatch({
            type: THEME_CYCLE_MODE
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

    const handleSettings = () => {
        store.dispatch({
            type: STATUS_STATE,
            value: 1020
        });
    }

    /**
     * [onAdd description]
     * @return {[type]} [description]
     */

    const onAdd = () => {
    };

    /**
     * svelte onMount
     */

    onMount(async function () {

        applicationDayOrNight = setDarkMode(localStorage.getObject('darkMode'));
        applicationFirstRun = localStorage.getItem('welcome');

        /*
        store.dispatch({
            type: STATUS_LOAD_BAR,
            value: 0.1
        });
        */

        store.subscribe(async () => {

            const {
                application,
                theme,
                status
            } = await store.getState();

            const {
                action,
                data,
                nodes,
                navigation,
                darkMode
            } = await application;

            const {
                options,
                progress,
                files
            } = await status;

            const {
                primary,
                mode
            } = await theme;

            _files_ = files;
            _mode_ = mode;

            state = (await status).state;

            showWizard = options.showWizard;

            applicationSourceCode = data;

            applicationNavigationMenuState = navigation;

            applicationDayOrNight = setDarkMode(darkMode);

            return;
        });

    });

    let state;

</script>

<TopAppBar {dense} {prominent} {variant} bind:collapsed>

    <!-- Primary Row -->

    <Row>

        <!-- Row Beginning -->

        <Section>

            <HeaderButton class="material-icons"
                          sign=">"
                          icon={!applicationNavigationMenuState?'menu':'menu_open'}
                          click={toggleMenu}/>

					{#if (_mode_=="auto")}
              <HeaderButton class="material-icons"
                            style="position:absolute;left:0px;top:-4px;opacity:0.15;font-size:2rem;"
                            state="1000"
                            sign="="
                            icon={applicationDayOrNight?'sync':'sync_disabled'}
                            click={handleDayOrNight}/>

              <HeaderButton class="material-icons"
                            style="pointer-events:none;position:absolute;left:0px;top:-4px;font-size:0.75rem;"
                            state="1000"
                            sign="="
                            icon={'nights_stay'}
                            click={handleDayOrNight}/>

              <HeaderButton class="material-icons"
                            style="pointer-events:none;position:absolute;left:8px;top:4px;font-size:0.75rem;"
                            state="1000"
                            sign="="
                            icon={'wb_sunny'}
                            click={handleDayOrNight}/>

					{:else}
              <HeaderButton class="material-icons"
                            state="1000"
                            sign="="
                            icon={_mode_==="dark"?'nights_stay':'wb_sunny'}
                            click={handleDayOrNight}/>

					{/if}




                <!-- Sidebar Toggle -->

					{#if ((tabIndex===0)&&(applicationCodeView===true)&&(applicationDigraphSource===false))}
              <HeaderButton class="material-icons" aria-label="insert_chart" title="return" click={toggleCodeView}>
                  insert_chart
              </HeaderButton>
					{/if}

        </Section>

        <!-- Row End -->

        <Section align="end" toolbar>


            <ColourPicker
                    state="1000"
                    sign="="/>

            <HeaderButton class="material-icons"
                          state="1000"
                          sign=">"
                          icon={!applicationDayOrNight?'nights_stay':'wb_sunny'}
                          click={handleDayOrNight}/>

            <HeaderButton
                    state="1000"
                    sign=">"
                    icon="settings"
                    class="material-icons" aria-label="App Settings" click={handleSettings}/>

            <!--
								<HeaderButton class="material-icons hidden"
								 icon={applicationFullscreen?'fullscreen':'fullscreen_exit'}
														click={!applicationFullscreen?openFullscreen:closeFullscreen} />
							-->

        </Section>

    </Row>

    <!-- Secondary Row -->

    <Row id="second-bar">

    <Section align="start" toolbar>

			{#if (notMobile)}

				{#if ((applicationDigraphSource===false))}

            <HeaderButton class="material-icons"
                          icon="insert_chart"
                          click={()=>{
						              store.dispatch({
						              type:STATUS_ADD,
						              value:1030
						              })
						              }} aria-label="add"/>

				{/if}

          <Divider></Divider>

				{#if ((true)&&(applicationDigraphSource))}

            <HeaderButton class="material-icons" aria-label="Preview SVG source"
                          alt="print"
                          icon="insert_chart"
                          click={()=>{
						              applicationCodeView=applicationCodeView;
						              applicationDigraphSource=false;}}/>

				{/if}

			{/if}

			{#if (!notMobile)}

      <HeaderButton class="material-icons"
                    icon="add"
              click={()=>{


                            /*
							              store.dispatch({
							              type:STATUS_ADD,
							              value:1030
							              })
							              */


			}} aria-label="add"/>

			{/if}

		{#if ((tabIndex!==0))}

            <HeaderButton class="material-icons" aria-label="bar_chart" title="bar_chart" icon="bar_chart"
            click={()=>{forceCode(applicationSourceCode.data)}}/>

		{/if}

		{#each _files_ as control, i}

            <HeaderButton class="material-icons" aria-label="" title="" click={()=>{}} icon="bar_chart"/>

		{/each}

		{#if ((applicationCodeView===false)&&(applicationDigraphSource===false))}

            <HeaderButton class="material-icons" aria-label="edit" title="edit" click={()=>{
                                         store.dispatch({
                            type: STATUS_STATE,
                            value: 1008
                            });
              }} icon="add_box"/>

		{/if}


    </Section>

    <Section align="end" toolbar>

				{#if (notMobile)}
                <!--
                          <HeaderButton class="material-icons hidden" aria-label="Print this page" click={()=>{
                          const html = window.d3.select("#graph0").html();
                          const win = window.open("", "graph0", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
                          win.document.body.innerHTML = `<textarea style="width:100%;height:100%;">${html}</textarea>`;}}
                                        alt="print" icon="print" />
        -->
        <!-- FOR each GRAPH in store.graph.list? -->
        <!-- disable when viewing other  -->
        <!-- <HoverFab></HoverFab> -->
        <!--
					{#if ((tabIndex===0)&&(applicationCodeView===false)&&(applicationDigraphSource===false))}
						<HeaderButton class="material-icons" aria-label="edit" title="edit" on:click={toggleCodeView}>edit</HeaderButton>
					{/if}
				-->

            <HeaderButton class="material-icons" aria-label="Preview SVG source" click={()=>{
							const html = window.d3.select("#graph0").html();
							//downloadSource(html);
							//applicationCodeView=true;
							applicationDigraphSource=html;}} alt="print" icon="code"/>

            <HeaderButton class="material-icons" aria-label="Download SVG" click={()=>{
							const svg = document.querySelector("svg");
							downloadSvg(svg);}} icon="file_download"/>

			{/if}

    </Section>

    </Row>

</TopAppBar>
