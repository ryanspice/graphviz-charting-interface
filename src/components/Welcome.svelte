<script>

  import {Title, Item, Graphic, Text} from '@smui/list';

  import Upload from "./static/Upload.svelte";
  import "./Welcome.svelte.scss";
</script>
<section id="welcome-screen">

  Thank you for being one of the first to test out my GraphViz based applicaiton for editing and manipulating GraphViz digraphs.

  <br/>
  <br/>

  See <a target="_blank" href="https://www.graphviz.org/">graphviz.org</a> for more information.

  <Upload />

  <br/>
	<br/>

  <Item onclick="document.getElementById('welcome-file-upload').click()">
		<i class="material-icons large" disabled>
		open_in_browser
		</i><br/>
		Upload
	</Item>

  <Item>
		<i class="material-icons large" disabled>
		create
		</i><br/>
		Create
	</Item>

  <div style="width:100%;display:none">
		<i class="material-icons large" >
		graphic_eq
		</i><br/>
		Demo
	</div>

  <br/>
	<br/>
  <copy id="ax-c4ca4238a0b923820dcc509a6f75849b">
  			<p>
  			Visit <a href="https://github.com/ryanspice">https://github.com/ryanspice</a> or;<br>
  			Contact me at <a href="mailto:spice.ryan@hotmail.com" target="_self">contact@ryanspice.com</a> to learn more about what I can do.<br>
  			</p><p>
  			Thanks - Merci - Grazi - Obrigado - Danken - Spasybi - 谢谢 - 감사
  			<br>
  			<br>
  			<img width="55px" src="https://ryanspice.com/images/1920px-Flag_of_Canada_(Pantone).svg.png">
  			<br>
  			<br>
  			copyright ©  2020 ryanspice.com
  		</p></copy>
</section>
