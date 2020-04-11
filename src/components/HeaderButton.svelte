<script>

    import {
        onMount
    } from 'svelte';

    import {store} from "../index";

    import IconButton from '@smui/icon-button';

    let _show_ = true;
    let _state_ = 1000;
    let _state_max_ = 1020;

    const operators = {
        '>': function (x, y) {
            return x > y
        },
        '<': function (x, y) {
            return x < y
        },
        '<=': function (x, y) {
            return x <= y
        },
        '>=': function (x, y) {
            return (x > y) || (x === y)
        },
        '=': function (x, y) {
            return x == y
        }
    };

    const checkState = (() => {
        return _show_ = operators[sign](Number(_state_), Number(state));
    })

    export let show = true;

    export let state = _state_; // always

    export let sign = ">="; // greater than, less than, or equal too

    export let icon = `sync_problem`;

    export let click = () => {

    }

    /**
     *  subscribe to status
     */

    onMount(() => {

        store.subscribe(async () => {

            const {
                application,
                status
            } = await store.getState();

            _show_ = false;
            _state_ = (await status).state;

            checkState();

        });

    })

</script>

{#if (_show_)}

    <IconButton class="material-icons"
                on:click={click}>

			{icon}

    </IconButton>

{/if}
