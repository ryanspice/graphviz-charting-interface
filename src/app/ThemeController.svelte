<script>

    import {
        onMount,
        afterUpdate
    } from 'svelte';

    import {store} from "../index";


    let _mode_ = 'auto';

    const styleElement = document.createElement('style');
        let test = false;

    /**
     * return full string of css to override style
     */

    async function styleElementCSS(primary) {

        if (!primary)
            return;

        if (
                (primary === 'brown') ||
                (primary === 'grey') ||
                (primary === 'blue-grey') ||
                (primary === 'black')
        ) {

        }

        let html = `

            :root {
              --primary: var(--material-color-${primary}-500);
              --secondary: var(--material-color-${primary}-200);
              --error: var(--material-color-${primary}-700);
              --background: #FFFFFF;
              --color: #FFFFFF;

              --theme-link-color: var(--material-color-${primary}-700);
            //  --text-icon-on-background: var(--material-color-${primary}-700);
              //--theme-color: white;
              //--theme-background: white;
              //--theme-primary: #202020;
              --theme-primary: var(--material-color-${primary}-500);
              //--theme-link-color: var(--material-color-${primary}-700);
              //--theme-secondary: #191919;
              //--sidebar-offset: 57px;
            --accessible-color: calc(
                (
                  (
                    (
                      (var(--red) * 299) +
                      (var(--green) * 587) +
                      (var(--blue) * 114)
                    ) / 1000
                  ) - 128
                ) * -1000
              );
            }
            `;

        //

        let dark = `
            --background: var(--material-color-black-700);
            --color: var(--material-color-${
                (
                    primary=='yellow' ||
                    primary=='lime' ||
                    primary=='amber'
                )?'black-700':primary+"-50"});
        `;

        //

        let light = `
            --background: #FFFFFF;
            --color: var(--material-color-${
                (
                        primary=='yellow' ||
                        primary=='lime' ||
                        primary=='amber'
                )?'black-700':"black-300"});

            --header-icon-color: var(${
                (
                        primary=='yellow' ||
                        primary=='lime' ||
                        primary=='amber'
                )?'--material-color-black-700':"--background"});
        `;

        //

        switch (_mode_){
            case 'auto':
                html += `
                    @media (prefers-color-scheme: dark) {
                        :root {
                            ${dark}
                        }
                    }

                    @media (prefers-color-scheme: light) {
                        :root {
                            ${light}
                        }
                    }`
                break;
            case 'light':
                html += `
                        :root {
                            ${light}
                        }
                    `;
                break;
            case 'dark':
                html += `
                        :root {
                            ${dark}
                        }
                    `;
                break;
        }

        html += `
            header {
               //background:var(--theme-primary);
            }
          `;
        styleElement.innerHTML = html;
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
                primary,
                mode
            } = await theme;

            if (styleElement) {
                await styleElement.remove();
            }

            _mode_ = mode;

            await styleElementCSS(primary);
            document.body.append(styleElement);

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
