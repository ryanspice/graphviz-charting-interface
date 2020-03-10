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

  import "./Dialog.svelte.scss";

  let self;

  export let id;
  export let title = 'undefined';
  export let open = true;
  export let full = true;

  export let onDismiss = () => { };
  export let onConfirm = () => { };
  export let onDeny = () => { };

  export let confirm = "true";
  export let deny = "false";

  /**
   */

  const onDismissHandler  = function(){
    onDismiss();
    //  self.$destroy();
  }

  /**
   */

  const onConfirmHandler  = function(){
    onConfirm();
  }

  /**
   */

  const onDenyHandler  = function(){
    onDeny();
  }

  /**
   * svelte afterUpdate
   */

  afterUpdate(()=>{

    if (self)
    if (open){
      self.open();
    }

  })

</script>

<Dialog
  id={id}
  bind:this={self}
  on:MDCDialog:closed={onDismissHandler}
  class={full?"puff-in-center full":"puff-in-center"} aria-labelledby="slider-title" aria-describedby="slider-content">

  {#if (title)}

    <Title id="slider-title">{title}</Title>

  {/if}

  <Content id={id}>

    <slot />

  </Content>

  {#if (deny||confirm)}

    <Actions>

      {#if (deny)}

        <Button on:click={onConfirmHandler} action="cancel">

          <Label>{deny}</Label>

        </Button>

      {/if}

      {#if (confirm)}

        <Button on:click={onDenyHandler} action="accept">

          <Label>{confirm}</Label>

        </Button>

      {/if}

    </Actions>

  {/if}

</Dialog>
