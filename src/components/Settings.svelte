<script>

  import "./Settings.svelte.scss";

  import {Title, Item, Graphic, Text} from '@smui/list';

  const STATE = {
    INIT:0, //unused
    ABOUT:1,
    PREVIEW:2,
    THEME:3,
    EXPORT:4,
    GENERAL:5
  }

  let STATE_CURRENT = STATE.GENERAL;

  const STATE_CHANGE = (event)=>{

    let state = '';

    try {

      state = String(event.target.innerText).toUpperCase();

    } catch (e){

      state = String(event.target.children[0].innerText).toUpperCase();

    }

    STATE_CURRENT = STATE[state];
  };

</script>

<section id="settings-list">

  <Item on:click={STATE_CHANGE} class="mdc-ripple-upgraded--background-focused">
    <Text >General</Text>
  </Item>

  <Item on:click={STATE_CHANGE}>
    <Text >Preview</Text>
  </Item>

  <Item on:click={STATE_CHANGE}>
    <Text >Export</Text>
  </Item>


  <Item on:click={STATE_CHANGE}>
    <Text >About</Text>
  </Item>

</section>

<section id="settings-content">

{#if STATE_CURRENT===STATE.PREVIEW}

  <Item>
    <Text>Allow Editing </Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

  <Item>
    <Text>Update Threshold </Text><span style="position:absolute; right:1rem;">32</span>
  </Item>

{/if}

{#if STATE_CURRENT===STATE.THEME}

  <Item>
    <Text>Primary Colour</Text>
    <div class="swatch-color-indigo-accent" style="width:20px;height:20px;position:absolute;right:1rem;background:var(--theme-primary);"></div>
  </Item>

  <Item>
    <Text>Secondary Colour</Text>
    <div class="swatch-color-indigo" style="width:20px;height:20px;position:absolute;right:1rem;background:var(--theme-secondary);"></div>
  </Item>

  <Item>
    <Text>Link Colour</Text>
    <div style="width:20px;height:20px;position:absolute;right:1rem;background:var(--theme-link-color);"></div>
  </Item>

  <Item>
    <Text>'prefers-color-scheme'</Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

{/if}

{#if STATE_CURRENT===STATE.EXPORT}

  <Item>
    <Text>Export PNG  </Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

  <Item>
    <Text>Export PDF </Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

  <Item>
    <Text>Export SVG </Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

  <Item>
    <Text>Export BUNDLE </Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

{/if}

{#if STATE_CURRENT===23}
<Item>
  <Text>Store Data </Text><span style="position:absolute; right:1rem;">✔</span>
</Item>

<Item>
  <Text>Clear User Data on Exit </Text><span style="position:absolute; right:1rem;">✔</span>
</Item>

<Item>
  <Text>Clear Project Data on Exit </Text><span style="position:absolute; right:1rem;">✔</span>
</Item>

{/if}

{#if STATE_CURRENT===STATE.GENERAL}

  <Item>
    <Text>Primary Colour</Text>
    <div class="swatch-color-indigo-accent" style="width:20px;height:20px;position:absolute;right:1rem;background:var(--theme-primary);"></div>
  </Item>

  <Item>
    <Text>Secondary Colour</Text>
    <div class="swatch-color-indigo" style="width:20px;height:20px;position:absolute;right:1rem;background:var(--theme-secondary);"></div>
  </Item>

  <Item>
    <Text>Link Colour</Text>
    <div style="width:20px;height:20px;position:absolute;right:1rem;background:var(--theme-link-color);"></div>
  </Item>

  <Item>
    <Text>'prefers-color-scheme'</Text><span style="position:absolute; right:1rem;">✔</span>
  </Item>

{/if}

{#if STATE_CURRENT===STATE.ABOUT}

  <Item>
  <Text>created by : ryan spice-finnie</Text>
  </Item>

{/if}

</section>
