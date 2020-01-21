
<svelte:head>

  <title>{title}</title>

</svelte:head>

<script>

  import 'redux';
  import {store} from "./index";
  import { afterUpdate } from 'svelte';

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
  import CodeView from './CodeView';
  import ColourPicker from "./ColourPicker.svelte";

  import {Item, Graphic, Text} from '@smui/list';

  import openFullscreen from './utils/openFullscreen';
  import closeFullscreen from './utils/closeFullscreen';

  import downloadSvg from './utils/downloadSvg';
  import downloadSource from './utils/downloadSource';

  let applicationSourceCode = ``;
  let applicationDigraphSource = false;

  let applicationFullscreen = false;
  let applicationCodeView = false;

  let applicationReady = false;
  let applicationTheme = {
    primary:""
  };

  let applicationDrawerData = [
    {name: '', number: ''}
  ];

  const components = {
    drawer: new Drawer({target: document.body})
  };

  const getItemStyle = offset => "top:"+offset+"px;left:0px;display:;pointer-events:auto ;  border-radius: 4px; background:#892787;";

  let hoverFab;
  let hovering = false;

  let dense = true;
  let prominent = false;
  let variant = 'short';
  let collapsed = false;
  let title = '';
  let Adjust = FixedAdjust;

  title = 'Example.graphviz';
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
  afterUpdate(function(){

    store.subscribe(async () => {

      const {
        action,
        theme,
        data,
        nodes
      } = await store.getState();

      applicationSourceCode = data;
      applicationTheme = theme;
      applicationReady = true;

    });

  });
  const toggleCodeView = ()=>{applicationCodeView=!applicationCodeView};

</script>

{#if applicationReady}

  <TopAppBar {dense} {prominent} {variant} bind:collapsed>

    <Row class={applicationTheme.primary}>

      <Section>

        <IconButton class="material-icons" on:click={()=>{

          // not sure a better way to do this
          window.temp.$$.ctx[2]();

        }}>menu</IconButton>

        <Title>{title}</Title>

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

  <!-- material "fab" moves to position of list item to show details -->

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

  <!-- working project node list -->

  <VirtualList items={applicationDrawerData} let:item>

    <Item href="javascript:void(0)"
      on:mousemove={(evt)=>{evt.preventDefault(); evt.stopPropagation()}}
      on:mouseover={(evt)=>{

        hovering = item.name;

        let offset;
        let scrollTop = document.querySelector('body > section > div > aside > div.mdc-drawer__content > nav > svelte-virtual-list-viewport').scrollTop

        setTimeout(()=>{


          if (hovering===false){

            hoverFab.$$.ctx[23].style = getItemStyle("-200");
            return;
          }

          if (hoverFab.$$.ctx[23].style !== getItemStyle(91+evt.target.offsetTop-scrollTop))
            hoverFab.$$.ctx[23].style = getItemStyle(91+evt.target.offsetTop-scrollTop);

          if (hoverFab.$$.ctx[11].children[1].innerText!==item.name){
            hoverFab.$$.ctx[11].children[1].innerText = item.name;
            hoverFab.$$.ctx[11].children[0].style.pointerEvents = "auto";
            hoverFab.$$.ctx[11].children[1].style.pointerEvents = "none";
            hoverFab.$$.ctx[11].style.pointerEvents = "auto";
          }

        },0)

      }}
      on:mouseout={()=>{

        hovering = false;

      }}
    >

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
