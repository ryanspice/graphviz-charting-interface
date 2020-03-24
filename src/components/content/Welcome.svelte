<script>

  import {store} from "../../index";

  import {
    STATUS_STATE
  } from '../../store/actions/status';

  import Card, {Media} from '@smui/card';

  import List, {
    Title,
    Item,
    Graphic,
    Text
  } from '@smui/list';

  import "./Welcome.svelte.scss";

  export let onInsertChart = () => {

  };

</script>
<section id="welcome-screen" >

  <h2>{lang.welcome.welcome}</h2>

  <p>{lang.welcome.thanks}

  <br/><br/>

   {lang.welcome.see} <a target="_blank" href="https://www.graphviz.org/">graphviz.org</a> {lang.welcome.info}

  </p>


  <br/><br/>

   <Card style="display:inline-block;width: 49%;margin:0px auto; cursor:pointer;" on:click={()=>{

       store.dispatch({
         type: STATUS_STATE,
         value:1001
       });
//      document.getElementById('welcome-file-upload').click();
     }}>

     <Media class="card-media-square" aspectRatio="square">
     <div style=" position: absolute; top: 37%;width:100%;padding-bottom:2rem;">

           	<i class="material-icons large" disabled>
           	 open_in_browser
           	</i>

             <br/>

           	<Text>{lang.welcome.buttons.upload}</Text>

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

           	{lang.welcome.buttons.create}

      </div>

     </Media>
   </Card>

</section>
