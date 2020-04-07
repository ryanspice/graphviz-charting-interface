<script>

  import {
    onMount,
    afterUpdate
  } from 'svelte';

import {store} from "../index";

  import {
    STATUS_STATE
  } from '../store/actions/status'

  import "./ThemeController.scss";

  onMount(async function () {

  	store.subscribe(async () => {

    	  const {
          status
    	  } = await store.getState();

        const {
        } = await status;

    });
    let elm = document.createElement('style');
    elm.id = "theme";
    elm.type = "text/css";
    elm.innerHTML = `
    @include preferredDarkMode(){
      :root {
        --theme-color: white;
        --theme-background: black;
        --theme-primary: #202020;
        --theme-secondary: #191919;
        --sidebar-offset: 57px;
        --theme-link-color: #FFFFFF;
      }
    }
    @include preferredLightMode(){
      :root {
        --theme-color: white;
        --theme-background: black;
        --theme-primary: #{$material-color-red-50};
        --theme-secondary: #191919;
        --sidebar-offset: 57px;
        --theme-link-color: #FFFFFF;
      }
    }

    header {
      background:var(--theme-primary);
    }

    `;
    document.body.append(elm);
  });

  afterUpdate(()=>{

  });

</script>
<span >
  test
</span>
