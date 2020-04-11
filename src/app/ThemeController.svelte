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
          application
    	  } = await store.getState();

        const {
          theme
        } = await application;

          if (document.getElementById('theme')){
            document.getElementById('theme').remove();
          }
            let elm = document.createElement('style');
            elm.id = "theme";
            elm.type = "text/css";
            elm.innerHTML = `
            :root {
              --primary: var(--material-color-${theme}-500);
              --secondary: var(--material-color-${theme}-a100);
            }

          @include preferredDarkMode(){
            :root {
              --theme-color: white;
              --theme-background: black;
              --theme-primary: #202020;
              --theme-primary: var(--material-color-${theme}-500);
              --theme-secondary: #191919;
              --sidebar-offset: 57px;
              --theme-link-color: #FFFFFF;
            }
          }
          @include preferredLightMode(){
            :root {
              --theme-color: white;
              --theme-background: black;
              --theme-primary: var(--material-color-${theme}-500);
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

  });

  afterUpdate(()=>{

  });

</script>
<span >
  test
</span>
