<script>

  import {Title, Item, Graphic, Text} from '@smui/list';

  import Upload from "./static/Upload.svelte";
  import "./Welcome.svelte.scss";
</script>
<section id="welcome-screen">

  Thank you for being one of the first to test out my GraphViz based applicaiton for editing and manipulating GraphViz digraphs. If you like to see more of my work see: <a href="https://www.ryanspice.com/">ryanspice.com</a><br/>

  <Upload />

  <br/>
	<br/>

  <div onclick="document.getElementById('welcome-file-upload').click()">
		<i class="material-icons large" disabled>
		open_in_browser
		</i><br/>
		Upload
	</div>

  <div>
		<i class="material-icons large" disabled>
		create
		</i><br/>
		Create
	</div>

  <br/>

  <div style="width:100%;display:none">
		<i class="material-icons large" >
		graphic_eq
		</i><br/>
		Demo
	</div>

  <br/>
	<br/>

  <a href="https://www.graphviz.org/">https://www.graphviz.org/</a>

</section>
