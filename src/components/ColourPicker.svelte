<script>

    import './ColourPicker.svelte.scss';

    import {
        onMount
    } from 'svelte';

    import {
        THEME_SET
    } from "../store/actions/theme";

    import {
        store
    } from "../index";

    import Select, {
        Option
    } from '@smui/select';

    import HeaderButton from "./HeaderButton.svelte";

    import colors from '../theme/colors';

    let select;

    /**
     * [description]
     * @return {[type]} [description]
     */

    const handleFocus = function () {

        select.$$.ctx[18].children[2].click();

    };

    /**
     * [description]
     * @param  {[type]} color [description]
     * @return {[type]}       [description]
     */

    const handleOption = async function (color) {

        store.dispatch({
            type: THEME_SET,
            data: color
        });

    };

    /**
     * [getColor description]
     * @param  {Color} str
     * @return {Color}
     */

    const getColor = function (color) {

        return color.name.replace(' ', '-').toLowerCase();
    };

    /**
     * [width description]
     * @type {String}
     */

    onMount(() => {

    })

    export let state;

    export let sign;

</script>

<HeaderButton
        state={state}
        sign={sign}
        class="material-icons"
        icon="color_lens"
        click={handleFocus}/>

<Select bind:this={select} id="colour-picker" enhanced>

	{#each colors as color}

      <Option value={color.name} id="colour-picker-list" on:click={()=>{handleOption(color)}}>

          <div class="swatch-color " style={"background:var(--material-color-" + getColor(color) +"-500)"}></div>

          <div class="swatch-color " style={"background:var(--material-color-" + getColor(color) +"-300)"}></div>

      </Option>

	{/each}

</Select>
