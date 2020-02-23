<script>

  import {Title, Item, Graphic, Text} from '@smui/list';

  import Upload from "./static/Upload.svelte";
  import "./Welcome.svelte.scss";
</script>
<section id="welcome-screen">

  <p>
    Thank you for testing!
    Try editing and manipulating GraphViz digraphs!

  <br/><br/>

  See <a target="_blank" href="https://www.graphviz.org/">graphviz.org</a> for more information.
  </p>

  <Upload />

  <br/><br/>

  <Item onclick="document.getElementById('welcome-file-upload').click()">

  	<i class="material-icons large" disabled>
  	 open_in_browser
  	</i>

    <br/>

  	Upload

  </Item>

  <Item>

  	<i class="material-icons large" disabled>
  	 create
  	</i>

    <br/>

  	Create

	</Item>

  <br/><br/>

  <copy id="ax-c4ca4238a0b923820dcc509a6f75849b">

		<p>
	    <a href="mailto:spice.ryan@hotmail.com" target="_self">contact@ryanspice.com</a><br>
    </p>

   </copy>

</section>
