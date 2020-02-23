
<script>

  import {
    onMount,
    onDestroy
  } from 'svelte';

  import LinearProgress from '@smui/linear-progress';

  let progress = 0;
  let closed = false;
  let timer;

  import {store} from "../../index";

  /**
   * [set description]
   * @param {[type]} value [description]
   */

  export function set(value) {

    progress = value;

    clear();

  }

  /**
   * [increment description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */

  export function increment(value) {

    progress += (Number(value) || .1);

    clear();

  }

  /**
   * [clear description]
   * @return {[type]} [description]
   */

  export function clear() {

    if (progress >= 1) {
      progress = 1;
      closed = true;
      clearInterval(timer);
    }

  }

  /**
   * [reset description]
   */

  export function reset() {

    progress = 0;
    closed = false;

  }

  /**
   * [interval description]
   * @return {[type]} [description]
   */

  export function interval() {

    clearInterval(timer);

    timer = setInterval(() => {
      increment();
    }, 100);

  }

  /**
   * svelte lifecycle
   */

  onDestroy(() => {

    clearInterval(timer);

  });

  /**
   * svelte onmount
   */

  onMount(()=>{

    store.subscribe(async ()=>{

      const {
        status
      } = await store.getState();

      const {
        progress
      } = await status;

      set(progress);

    });

  });

</script>

<LinearProgress {progress} {closed} />
