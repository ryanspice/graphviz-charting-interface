<script>

  import {
    onMount,
    afterUpdate
  } from "svelte";

  import Dialog, {
    Title,
    Content,
    Actions,
    InitialFocus
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
  export let id;// = `test-dialog-content`;
  export let components = [];

  let simpleDialog;
  let eventDialog;
  let listDialog;
  let listSelectionDialog;
  let sliderDialog;
  let clicked = 'Nothing yet.';
  let response = 'Nothing yet.';
  let clickedList = 'Nothing yet.';
  let selection = 'Radishes';
  let selected = 'Nothing yet.';
  let volumeMedia = 100;
  let volumeRingtone = 80;
  let volumeAlarm = 80;

  function closeHandler(e) {
    switch (e.detail.action) {
      case 'none':
        response = 'Ok, well, you\'re wrong.';
        break;
      case 'all':
        response = 'You are correct. All dogs are the best dog.';
        break;
      default:
        response = 'It\'s a simple question. You should be able to answer it.';
        break;
    }
  }

  function selectionCloseHandler(e) {
    if (e.detail.action === 'accept') {
      selected = selection;
    }
    selection = 'Radishes';
  }
  let test;

  onMount(()=>{

    if (open){
      sliderDialog.open();
    }

  })
afterUpdate(()=>{

  if (document.getElementById(id)){
  document.getElementById(id).innerHTML = ``;

  components.forEach(component => {

    new component({target:document.getElementById(id)})

  })}

})
</script>

<Dialog bind:this={sliderDialog} aria-labelledby="slider-title" aria-describedby="slider-content">

  <Title id="slider-title">{title}</Title>

  <Content id={id}>

  </Content>

  <Actions>

    {#if (deny)}

      <Button action="cancel" style="float:left;">

        <Label>{deny}</Label>

      </Button>

    {/if}

    {#if (confirm)}

      <Button action="accept">

        <Label>{confirm}</Label>

      </Button>

    {/if}

  </Actions>

</Dialog>
