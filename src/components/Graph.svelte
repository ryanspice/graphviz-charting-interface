<script>

  import { onMount, afterUpdate } from 'svelte';

  import {store} from "../index";
  import {APPLICATION_LOAD} from "../store/actions/application";

  import "./Graph.svelte.scss";

  import D3Graphviz from "../utils/D3Graphviz";

  let GraphContainer;
  let GraphStore;
  let Store;

  /**/

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

      const {action} =  await store.getState();

      if (container.style.opacity==0){
        const data = await D3Graphviz(action.data);
      }

      container.style.opacity = 1;

    });

    //

    store.dispatch({
      type:APPLICATION_LOAD,
      data:(Store)
    });

  });

  /**/

  afterUpdate(async () => {

  });

  //export let channel;
  //export let calculate;
</script>

<section bind:this={GraphContainer} class="graph-container">

</section>
