<script>

    import {
        onMount,
        afterUpdate
    } from 'svelte';

    import {store} from "../index";

    const styleElement = document.createElement('style');

    /**
     * return full string of css to override style
     */

    function styleElementCSS(primary) {

        styleElement.innerHTML = `
            :root {
              --primary: var(--material-color-${primary}-500);
              --secondary: var(--material-color-${primary}-a100);
            }

          @include preferredDarkMode(){
            :root {
              --theme-color: white;
              --theme-background: black;
              --theme-primary: #202020;
              --theme-primary: var(--material-color-${primary}-500);
              --theme-secondary: #191919;
              --sidebar-offset: 57px;
              --theme-link-color: #FFFFFF;
            }
          }
          @include preferredLightMode(){
            :root {
              --theme-color: white;
              --theme-background: black;
              --theme-primary: var(--material-color-${primary}-500);
              --theme-secondary: #191919;
              --sidebar-offset: 57px;
              --theme-link-color: #FFFFFF;
            }
          }

          header {
            background:var(--theme-primary);
          }
          `;

    }

    /**
     * subscribe to theme variables from state
     */

    onMount(async function () {

        store.subscribe(async () => {

            const {
                theme
            } = await store.getState();

            const {
                primary
            } = await theme;

            if (styleElement) {
                await styleElement.remove();
            }

            await styleElementCSS(primary);
            await document.body.append(styleElement);

        });

    });

    /**
     */

    afterUpdate(() => {

    });

</script>
<span>
  test
</span>
