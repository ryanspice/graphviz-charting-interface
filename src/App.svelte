<svelte:head>
  <title>{title}</title>
</svelte:head>
{#if applicationReady}
  <TopAppBar {dense} {prominent} {variant} bind:collapsed>

    <Row class={applicationTheme.primary}>

      <Section>

        <IconButton class="material-icons" on:click={()=>{
          window.temp.$$.ctx[9]()
        }}>menu</IconButton>

        <Title>{title}</Title>

      </Section>

      <Section align="end" toolbar>

        <ColourPicker></ColourPicker>

        {#if fullscreen===false}
          <IconButton class="material-icons" on:click = {openFullscreen}>fullscreen</IconButton>
        {/if}
        {#if fullscreen===true}
          <IconButton class="material-icons" on:click = {closeFullscreen}>fullscreen_exit</IconButton>
        {/if}

      </Section>

    </Row>

    <Row class={applicationTheme.primary+"-accent"}>

      <Section align="start" toolbar>

        <IconButton class="material-icons" aria-label="add">add</IconButton>

        {#if codeView===false}
          <IconButton class="material-icons" aria-label="edit" on:click={()=>{codeView=!codeView}}>edit</IconButton>
        {/if}
        {#if codeView===true}
          <IconButton class="material-icons" aria-label="insert_chart" on:click={()=>{codeView=!codeView}}>insert_chart</IconButton>
        {/if}

      </Section>

      <Section align="end" toolbar>

        <IconButton class="material-icons" aria-label="Preview SVG source" on:click={()=>{
        const html = d3.select("#graph0").html();
        downloadSource(html);
}} alt="print">code</IconButton>

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

  <Item bind:this={hoverFab} style="z-index:232;position:fixed;top:200px;left:0px;display:none;" href="javascript:void(0)"  on:mouseout={()=>{
    hovering = false;
    if (hovering==false){
      hoverFab.$$.ctx[23].style = "min-width:222px;z-index:232;position:fixed;top:-200px;left:0px;display:none;pointer-events:auto ;";
      return;
    }}}
  >
    <Graphic class="material-icons" aria-hidden="true" on:click = {()=>{}}>close</Graphic>

    <Text></Text>

  </Item>

  <VirtualList items={data} let:item>
    <Item href="javascript:void(0)"
      on:mousemove={(evt)=>{evt.preventDefault(); evt.stopPropagation()}}
      on:mouseover={(evt)=>{

        hovering = item.name;

        setTimeout(()=>{

          if (hovering===false){
            hoverFab.$$.ctx[23].style = "min-width:222px;z-index:232;position:fixed;top:-200px;left:0px;display:none;pointer-events:auto ;";
            return;
          }

          if (hoverFab.$$.ctx[23].style !== "min-width:222px;z-index:232;position:fixed;top:"+(110+evt.target.offsetTop)+"px;left:0px;display:;pointer-events:auto ;  border-radius: 4px; background:#892787;")
            hoverFab.$$.ctx[23].style = "min-width:222px;z-index:232;position:fixed;top:"+(110+evt.target.offsetTop)+"px;left:0px;display:;pointer-events:auto ;  border-radius: 4px; background:#892787;";

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

  {#if codeView}
    <CodeView code={applicationCode}></CodeView>
  {/if}
{/if}
<script>

  import 'redux';
  import {store} from "./index";

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

  import List, {Item, Graphic, Text} from '@smui/list';

  import openFullscreen from './utils/openFullscreen';
  import closeFullscreen from './utils/closeFullscreen';

  import downloadSvg from './utils/downloadSvg'
  import downloadSource from './utils/downloadSource'

  let applicationCode = ``;
  let applicationReady = false;
  let applicationTheme = {
    primary:""
  };

  let fullscreen = false;
  let codeView = false;

  const components = {
    drawer: new Drawer({target: document.body})
  };

  let data = [
    {name: '', number: ''}
  ];


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
    data = incoming;
  };

  /*
  window.onscroll = (evt)=>{
    document.children[0].setAttribute('data-scroll',Math.round(window.scrollY));
  };
 */

  document.onfullscreenchange = function () {
    fullscreen = !fullscreen;
  };

  store.subscribe(() => {

    const {action, theme} = store.getState();

    applicationCode = action.data;
    applicationTheme = theme;

    applicationReady = true;

  });

</script>
