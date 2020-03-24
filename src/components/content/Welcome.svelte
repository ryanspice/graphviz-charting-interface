<script>
  import {
    onMount,
    afterUpdate
  } from 'svelte';

  import Card, {Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons} from '@smui/card';

  import Button, {Label} from '@smui/button';

  import IconButton, {Icon} from '@smui/icon-button';

  import List, {
    Title,
    Item,
    Graphic,
    Text
  } from '@smui/list';

  import Upload from "../static/Upload.svelte";

  import "./Welcome.svelte.scss";

  export let onInsertChart = () => {

  };

</script>
<section id="welcome-screen" >

  <h2>Welcome!</h2>

  <p>
    Thank you for testing!
    Try editing and manipulating GraphViz digraphs!

  <br/><br/>

  See <a target="_blank" href="https://www.graphviz.org/">graphviz.org</a> for more information.
  </p>

  <Upload />

  <br/><br/>

   <Card style="display:inline-block;width: 49%;margin:0px auto; cursor:pointer;" on:click={()=>{

      document.getElementById('welcome-file-upload').click();
     }}>

     <Media class="card-media-square" aspectRatio="square">
     <div style=" position: absolute; top: 37%;width:100%;padding-bottom:2rem;">

           	<i class="material-icons large" disabled>
           	 open_in_browser
           	</i>

             <br/>

           	Upload

      </div>

     </Media>
   </Card>
   <Card style="display:inline-block;width: 49%;margin:0px auto; cursor:pointer;" on:click={onInsertChart}>
     <Media class="card-media-square" aspectRatio="square">
     <div style=" position: absolute; top: 37%;width:100%;padding-bottom:2rem;">

           	<i class="material-icons large" disabled>
           	 insert_chart
           	</i>

             <br/>

           	Create

      </div>

     </Media>
   </Card>

</section>
