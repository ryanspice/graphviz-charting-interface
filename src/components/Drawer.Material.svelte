<script>

    import {MDCDrawer} from "@material/drawer";
    import {onMount, onDestroy, afterUpdate, setContext} from 'svelte';
    import {current_component} from 'svelte/internal';
    import {forwardEventsBuilder} from '@smui/common/forwardEvents.js';
    import {exclude} from '@smui/common/exclude.js';
    import {useActions} from '@smui/common/useActions.js';

    const forwardEvents = forwardEventsBuilder(current_component, ['MDCDrawer:opened', 'MDCDrawer:closed']);

    export let use = [];
    export {className as class};
    export let variant = null;
    export let open = false;
    export let width = '';

    let className = '';
    let style = "width:" + width + "px";


    let element;
    let drawer;
    let listPromiseResolve;
    let listPromise = new Promise(resolve => listPromiseResolve = resolve);

    setContext('SMUI:list:nav', true);
    setContext('SMUI:list:item:nav', true);

    if (variant === 'dismissible' || variant === 'modal') {
        setContext('SMUI:list:instantiate', false);
        setContext('SMUI:list:getInstance', getListInstancePromise);
    }

    $: if (drawer && drawer.open !== open) {
        drawer.open = open;
    }

    onMount(() => {
        if (variant === 'dismissible' || variant === 'modal') {
            drawer = new MDCDrawer(element);
            listPromiseResolve(drawer.list_);
        }
    });

    onDestroy(() => {
        drawer && drawer.destroy();
    });

    afterUpdate(() => {
        if (drawer && !(variant === 'dismissible' || variant === 'modal')) {
            drawer.destroy();
            drawer = undefined;
        } else if (!drawer && (variant === 'dismissible' || variant === 'modal')) {
            drawer = new MDCDrawer(element);
            listPromiseResolve(drawer.list_);
        }
    });

    function getListInstancePromise() {
        return listPromise;
    }

    function updateOpen() {
        open = drawer.open;
    }

    export function setOpen(value) {
        open = value;
    }
</script>
<aside
        bind:this={element}
        use:useActions={use}
        use:forwardEvents
        style={"width:"+width+"px"}
        class="
    mdc-drawer
    {className}
    {variant === 'dismissible' ? 'mdc-drawer--dismissible' : ''}
    {variant === 'modal' ? 'mdc-drawer--modal' : ''}
  "
        on:MDCDrawer:opened={updateOpen} on:MDCDrawer:closed={updateOpen}
        {...exclude($$props, ['use', 'class', 'variant', 'open'])}
>
    <slot></slot>
</aside>
