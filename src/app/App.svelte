<svelte:head>

    <title>{applicationTitle}</title>

</svelte:head>

<script>

    import {
        onMount,
        afterUpdate
    } from 'svelte';

    import 'redux';

    import {store} from "../index";

    import {
        RETRIEVE_ITEM,
        APPLICATION_LOAD,
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

    import "./App.svelte.scss";

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

    import Header from '../components/Header.svelte';
    import LoadingBar from "../components/static/LoadingBar.svelte";

    import Drawer, {DrawerToggle} from '../components/Drawer.svelte';

    import Graph from '../components/Graph.svelte';
    import CodeView from '../components/CodeView';
    import ColourPicker from "../components/ColourPicker.svelte";

    import {Item, Graphic, Text} from '@smui/list';

    import openFullscreen from '../utils/openFullscreen';
    import closeFullscreen from '../utils/closeFullscreen';

    import downloadSvg from '../utils/downloadSvg';
    import downloadSource from '../utils/downloadSource';

    import HoverFab from "../components/HoverFab.svelte";
    import AdditionFab from "../components/AdditionFab.svelte";

    import ContentEditor from "../components/ContentEditor.svelte";
    import {setDarkMode} from "../store/actions/darkmode";

    import Dialog from "../components/static/Dialog";

    import DialogController from "./DialogController.svelte";
    import ThemeController from "./ThemeController.svelte";

    //export let store;
    export let loading;

    let applicationSourceCode = ``;
    let applicationDigraphSource = false;

    let applicationFullscreen = false;
    let applicationDayOrNight = false;
    let applicationCodeView = false;

    let applicationFirstRun = false;
    let applicationReady = false;
    //let applicationTheme = {
//        primary: ""
//    };

    let applicationNavigationMenuState = true;

    let applicationDrawerData = [
        {name: '', number: ''}
    ];

    new LoadingBar({target: document.body});

    const components = {
        themecontroller: new ThemeController({
            target: document.body
        }),
        drawer: new Drawer({target: document.body}),
        graph: new Graph({target: document.body}),
        dialogcontroller: new DialogController({
            target: document.body
        }),
        hoverFab: new HoverFab({target: document.body}),
        additionFab: new AdditionFab({target: document.body})
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

    window.updateList = function (incoming) {
        applicationDrawerData = incoming;
    };

    document.onfullscreenchange = function () {
        applicationFullscreen = !applicationFullscreen;
    };

    /* TABS TESTING */

    const code_a = require("../store/models/example_chart_a.js").default;
    const code_b = require("../store/models/example_chart_b.js").default;
    const code_c = require("../store/models/example_chart_c.js").default;

    let tabIndex = 0;

    const forceCode = async (chart) => {
        tabIndex++;
        D3Graph.renderDot(chart);
    };

    window.forceCode = forceCode;

    // TODO :: REMOVE

    window.code = '';

    /**
     * [getCode description]
     * @param  {[type]} source [description]
     * @return {[type]}        [description]
     */

    function getCode(source) {

        let code = source || applicationSourceCode.data;

        code = code.split("\n");

        code = code.map((item, index) => {
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

        //    applicationDayOrNight = setDarkMode(!localStorage.getObject('darkMode'));
        applicationFirstRun = localStorage.getItem('welcome');

        store.dispatch({
            type: STATUS_LOAD_BAR,
            value: 0.1
        });

        store.subscribe(async () => {

            const {
                application,
                status,
                    theme
            } = await store.getState();

            const {
                action,
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

            applicationNavigationMenuState = navigation;
            applicationTitle = title;
            applicationReady = true;

            applicationSourceCode = data;
            //applicationTheme = theme;

            return;
            applicationDayOrNight = setDarkMode(darkMode);
        });

    });

    const notMobile = true; // should have probably used css

</script>

<Header/>

<!-- working project node list -->
<!-- potentially move to index ? it gets moved  -->

<VirtualList items={applicationDrawerData} let:item>

    <Item href="javascript:void(0)"
          on:mousemove={(evt)=>{
            evt.preventDefault();
            evt.stopPropagation();
          }}
          on:mouseover={(evt)=>{


					let offset;

					let scrollTop = document.querySelector('body > section > div > aside > div.mdc-drawer__content > nav > svelte-virtual-list-viewport').scrollTop //dont do this

					store.dispatch({
					type: RETRIEVE_ITEM,
					item: item,
					itemPosition: {x:0, y:(91+evt.target.offsetTop-scrollTop)}
					});

					}}
                  on:mouseout={()=>{
		hovering = false;
		}}>

        <Graphic class="material-icons" aria-hidden="true">{item.icon || "insert_link"}</Graphic>

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
