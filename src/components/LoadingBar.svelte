
<script>

  import {onMount, onDestroy} from 'svelte';
  import LinearProgress from '@smui/linear-progress';

  let progress = 0;
  let closed = false;
  let timer;

  export function set(value) {
	progress = value;
	clear();
  }

  export function increment(value) {
	progress += (Number(value) || .1);
	clear();
  }

  export function clear() {
	if (progress >= 1) {
	  progress = 1;
	  closed = true;
	  clearInterval(timer);
	}
  }

  export function reset() {
	progress = 0;
	closed = false;
  }

  export function interval() {
	clearInterval(timer);
	timer = setInterval(() => {
	  increment();
	}, 100);
  }

  onDestroy(() => {
	clearInterval(timer);
  });

</script>

<LinearProgress {progress} {closed} />
