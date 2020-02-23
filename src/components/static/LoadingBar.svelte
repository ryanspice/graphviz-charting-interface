
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
   * sets progress value, and clears
   */

  export function set(value) {

    progress = value;

    clear();

  }

  /**
   * increments progress by value, and clears
   * @param  {Number} value
   */

  export function increment(value) {

    progress += (Number(value) || .1);

    clear();

  }

  /**
   * if progress complete (1) clear timer, flags
   */

  export function clear() {

    if (progress >= 1) {
      progress = 1;
      closed = true;
      clearInterval(timer);
    }

  }

  /**
   * reset progress, flags
   */

  export function reset() {

    progress = 0;
    closed = false;

  }

  /**
   * clear and set timer, increment
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
