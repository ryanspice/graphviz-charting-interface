<script>

    import {
        store
    } from "../index";

    import {
        THEME_CYCLE_MODE,
    } from "../store/actions/theme";

    import {
        onMount
    } from 'svelte';

    import HeaderButton from "./HeaderButton.svelte";

    /**
     * dispatch day and night change
     * @returns {Promise<void>}
     */

    const handleDayOrNight = async () => {

        store.dispatch({
            type: THEME_CYCLE_MODE
        });

    };

    onMount(() => {

        store.subscribe(async () => {

            const {
                theme,
            } = await store.getState();

            const {
                primary,
                mode
            } = await theme;

            _mode_ = mode;

        });

    })

    let _mode_ = `auto`;
</script>


{#if (_mode_=="auto")}
    <HeaderButton class="material-icons"
                  style="position:absolute;left:0px;top:-4px;opacity:0.15;font-size:2rem;"
                  state="1000"
                  sign="="
                  icon={_mode_?'sync':'sync_disabled'}
                  click={handleDayOrNight}/>

    <HeaderButton class="material-icons"
                  style="pointer-events:none;position:absolute;left:0px;top:-4px;font-size:0.75rem;"
                  state="1000"
                  sign="="
                  icon={'nights_stay'}
                  click={handleDayOrNight}/>

    <HeaderButton class="material-icons"
                  style="pointer-events:none;position:absolute;left:8px;top:4px;font-size:0.75rem;"
                  state="1000"
                  sign="="
                  icon={'wb_sunny'}
                  click={handleDayOrNight}/>

{:else}
    <HeaderButton class="material-icons"
                  state="1000"
                  sign="="
                  icon={_mode_==="dark"?'nights_stay':'wb_sunny'}
                  click={handleDayOrNight}/>

{/if}