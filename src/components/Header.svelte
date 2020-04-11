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
    let applicationTheme = {
        primary: ""
    };

    let applicationNavigationMenuState = true;

    let applicationDrawerData = [
        {name: '', number: ''}
    ];

    let charts = [
        {icon: 'insert_chart'},
        {icon: 'show_chart'},
        {icon: 'link'},
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

        // applicationDayOrNight = setDarkMode(localStorage.getObject('darkMode'));
        applicationFirstRun = localStorage.getItem('welcome');

        store.dispatch({
            type: STATUS_LOAD_BAR,
            value: 0.1
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

            state = (await status).state;

            applicationTheme = theme;

            showWizard = options.showWizard;

            applicationSourceCode = data;

            applicationNavigationMenuState = navigation;
            //applicationTitle = title;

            // applicationDayOrNight = setDarkMode(darkMode);

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
                          click={toggleMenu}></HeaderButton>

            <HeaderButton class="material-icons"
                          state="1000"
                          sign="="
                          icon={!applicationDayOrNight?'nights_stay':'wb_sunny'}
                          click={handleDayOrNight}/>

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
                  sign=">=" />

          <HeaderButton class="material-icons"
                        state="1000"
                        sign=">"
                        on:click={handleDayOrNight}>{!applicationDayOrNight?'nights_stay':'wb_sunny'}</HeaderButton>


            <HeaderButton
                    state="1000"
                    sign=">"
                    class="material-icons" aria-label="App Settings" click={handleSettings}>settings
            </HeaderButton>

					{#if (notMobile)}
          <!--
              <HeaderButton class="material-icons hidden"
                          on:click={!applicationFullscreen?openFullscreen:closeFullscreen}>{applicationFullscreen?'fullscreen':'fullscreen_exit'}</HeaderButton>
-->
					{/if}

        </Section>

    </Row>

    <!-- Secondary Row -->

    <Row id="second-bar">

        <Section align="start" toolbar>

					{#if (notMobile)}

						{#if ((applicationDigraphSource===false))}

                <HeaderButton class="material-icons" click={()=>{
								store.dispatch({
								type:STATUS_ADD,
								value:1030
								})
								}} aria-label="add">insert_chart
                </HeaderButton>

						{/if}

              <Divider></Divider>

						{#if ((true)&&(applicationDigraphSource))}

                <HeaderButton class="material-icons" aria-label="Preview SVG source" click={()=>{
								applicationCodeView=applicationCodeView;
								applicationDigraphSource=false;}} alt="print">insert_chart
                </HeaderButton>

						{/if}

					{/if}

					{#if (!notMobile)}

              <HeaderButton class="material-icons" click={()=>{
							store.dispatch({
							type:STATUS_ADD,
							value:1030
							})
							}} aria-label="add">add
              </HeaderButton>

					{/if}

					{#if ((tabIndex!==0))}

              <HeaderButton class="material-icons" aria-label="bar_chart" title="bar_chart"
                            on:click={()=>{forceCode(applicationSourceCode.data)}}>bar_chart
              </HeaderButton>

					{/if}

					{#each charts as control, i}

              <HeaderButton class="material-icons" aria-label="" title="" click={()=>{}}>bar_chart</HeaderButton>

					{/each}

					{#if ((applicationCodeView===false)&&(applicationDigraphSource===false))}

              <HeaderButton class="material-icons" aria-label="edit" title="edit" click={()=>{}}>add_box
              </HeaderButton>

					{/if}


        </Section>

        <Section align="end" toolbar>

					{#if (notMobile)}

              <HeaderButton class="material-icons hidden" aria-label="Print this page" click={()=>{
							const html = window.d3.select("#graph0").html();
							const win = window.open("", "graph0", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
							win.document.body.innerHTML = `<textarea style="width:100%;height:100%;">${html}</textarea>`;}}
                            alt="print">print
              </HeaderButton>

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
							applicationDigraphSource=html;}} alt="print">code
              </HeaderButton>

              <HeaderButton class="material-icons" aria-label="Download SVG" click={()=>{
							const svg = document.querySelector("svg");
							downloadSvg(svg);}}>file_download
              </HeaderButton>

					{/if}

        </Section>

    </Row>

</TopAppBar>
