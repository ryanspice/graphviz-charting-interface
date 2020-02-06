
<script>

  import {onMount} from 'svelte';

  export let vertical = true;

  let className = `MuiDivider-root ${vertical}`;

  onMount(()=>{

    import('Divider.Material.svelte.scss');

    if (vertical === true) {
      vertical = 'MuiDivider-vertical';
    }

    className = `MuiDivider-root ${vertical}`;
  })

</script>
<hr class={className}>
