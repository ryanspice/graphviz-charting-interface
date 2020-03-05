<script>

  import {
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

  export let id;
  export let title = 'undefined';
  export let open = true;
  export let confirm = "true";
  export let onConfirm = () => {

  };
  export let deny = "false";

  let self;

  const onCloseHandler  = function(){
    onConfirm();
    self.$destroy();
  }

  afterUpdate(()=>{

    if (self)
    if (open){
      //console.log(self)
      self.open();
    }

  })

</script>

<Dialog
  id={id}
  bind:this={self}
  on:MDCDialog:closed={onCloseHandler}
  class="puff-in-center" aria-labelledby="slider-title" aria-describedby="slider-content">

  {#if (title)}

      <Title id="slider-title">{title}</Title>

  {/if}

  <Content id={id}>

    <slot />

  </Content>

  {#if (deny||confirm)}
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
  {/if}

</Dialog>
