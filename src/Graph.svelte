
<section bind:this={GraphContainer} class="graph-container">

</section>

<script>

  let GraphContainer;

  import { afterUpdate } from 'svelte';

  import {APPLICATION_LOAD} from "./store/actions/application";
  import {store} from "./index";

  /**/

  afterUpdate(async () => {

    const D3 = (await import("d3-graphviz"));
    const D3Graph = await D3.graphviz('.graph-container');

    const GraphStore = (await import("./store")).default;
    const Store = await new GraphStore();

    const container = GraphContainer;
    container.style.opacity = 0;

    if (!Store.data){
      return new Error("Store.data is invalid");
    }

    D3Graph.renderDot(Store.data).on("end", function() {
      store.dispatch({
        type:APPLICATION_LOAD,
        data:(Store.data)
      });

      store.subscribe(()=>{
        console.log('Graph',store.getState())
      });

      const svg = document.querySelector('body > section > div > section > svg');
      const scale = 0.5;
      const dimensions = {
        x:svg.getAttribute('width').split('pt')[0],
        y:svg.getAttribute('height').split('pt')[0]
      };

      dimensions.y = ((dimensions.y*scale)+(dimensions.y/window.innerHeight));
      dimensions.x = (-dimensions.x*scale)-((dimensions.x/window.innerWidth));

      D3Graph._scale = 0.5;
      D3Graph.scale(0.5);
      //D3Graph.zoomTranslateExtent         ([0,500]);
      //D3Graph.zoomScaleExtent([0,500]);
      D3Graph._translation = {x:dimensions.x/2.75,y:dimensions.y+100};

      D3Graph.renderDot(Store.data).on("end",function(){

        const drawer = document.querySelector('body > section > div > aside > div.mdc-drawer__content nav');
        const vlvp = document.querySelector('svelte-virtual-list-viewport');

        drawer.append(vlvp);
        container.style.opacity = 1;

        const updateList = window.updateList;

        updateList([
          //{name:"Digraph", icon:"none"},
          {name:"G", icon:"insert_chart_outlined"},
          //{name:"Subgraphs", icon:"none"},
          ...Store.subgraphs,
          //{name:"Connections", icon:"none"},
          ...Store.connections
        ]);

        window.store = Store;
        const svg = document.querySelector('svg');
        svg.setAttribute("width","100%");
        svg.setAttribute("height","100%");

      });

    });

  });

  export let channel;
  export let calculate;
</script>
