
<section bind:this={GraphContainer} class="graph-container">

</section>

<script>

  import { afterUpdate } from 'svelte';

  import {store} from "./index";
  import {APPLICATION_LOAD} from "./store/actions/application";

  import D3Graphviz from "./utils/D3Graphviz";

  let GraphContainer;

  /**/

  afterUpdate(async () => {

    const GraphStore = (await import("./store")).default;
    const Store = await new GraphStore();

    const container = GraphContainer;
    container.style.opacity = 0;

    if (!Store.data){
      return new Error("GraphStore data is invalid");
    }

    //

    store.subscribe(async (t)=>{

      const {action} =  await store.getState();

      if (container.style.opacity==0)
      await D3Graphviz(action.data);

      container.style.opacity = 1;

    });

    //

    store.dispatch({
      type:APPLICATION_LOAD,
      data:(Store)
    });

  });

  export let channel;
  export let calculate;
</script>
