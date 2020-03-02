<script>

  import { onMount, afterUpdate } from 'svelte';

  import {store} from "../index";
  import {
    APPLICATION_LOAD_GRAPH
  } from "../store/actions/application";

  import "./Graph.svelte.scss";

  import D3Graphviz from "../utils/D3Graphviz";

  let GraphContainer;
  let GraphStore;
  let Store;

  /**/

  let state = 0;
  onMount(async () => {

    const container = GraphContainer;
    container.style.opacity = 0;

    GraphStore = (await import("../store")).default;
    Store = await new GraphStore();

    if (!Store.data){
      return new Error("GraphStore data is invalid");
    }

    //

    store.subscribe(async (t)=>{

  	  const {
        application,
        status
  	  } = await store.getState();

      const {
    		action
      } = await application;

      state = (await status).state;

        console.log(state)
      if (container.style.opacity==0){
        const data = await D3Graphviz(action.data);
      }

      container.style.opacity = 1;

    });

    //

    store.dispatch({
      type:APPLICATION_LOAD_GRAPH,
      data:(Store)
    });

  });

  /**/

  afterUpdate(async () => {

  });

  //export let channel;
  //export let calculate;
</script>

<section bind:this={GraphContainer} class={"graph-container " + (state>1000?'':'hidden')}>

</section>
