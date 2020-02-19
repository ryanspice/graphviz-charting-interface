<script>

  import {
    onMount,
    afterUpdate
  } from "svelte";

  import Dialog, {
    Title,
    Content,
    Actions,
    InitialFocus,
    Scrim
  } from '@smui/dialog';

  import Button, {
    Label
  } from '@smui/button';

  import List, {
    Item,
    Graphic,
    Text
  } from '@smui/list';

  import Radio from '@smui/radio';
  import Slider from '@smui/slider';
  import FormField from '@smui/form-field';

  export let title = 'undefined';
  export let destroy = false;
  export let open = true;
  export let confirm = "true";
  export let deny = "false";
  export let content = ``;
  export let id;
  export let components = [];

  let self;

  function onCloseHandler(){
    self.$destroy();
  }

  onMount(()=>{

    if (open){
      self.open();
    }

  })

  afterUpdate(()=>{

    if (document.getElementById(id)){

      components.forEach(component => {

        new component({target:document.getElementById(id)})

      });

    }

  })
</script>

<Dialog
    bind:this={self}
    on:MDCDialog:closed={onCloseHandler}
    class="puff-in-center" aria-labelledby="slider-title" aria-describedby="slider-content">

  <Title id="slider-title">{title}</Title>

  <Content id={id}>

  </Content>

  <Actions>

    {#if (deny)}

      <Button on:click={onCloseHandler} action="cancel">

        <Label>{deny}</Label>

      </Button>

    {/if}

    {#if (confirm)}

      <Button on:click={onCloseHandler} action="accept">

        <Label>{confirm}</Label>

      </Button>

    {/if}

  </Actions>

</Dialog>
