<script>

    import {store} from "../../index";

    import {
        STATUS_STATE
    } from '../../store/actions/status';

    import "./Create.Template.svelte.scss";

    import {Text} from '@smui/list';

    import Card, {Media} from '@smui/card';

    /**
     *
     */

    const handleTemplatePick = () => {

        store.dispatch({
            type: STATUS_STATE,
            value: 1005
        });

    };

    /**
     *
     */

    export let onInsertChart = () => {

    };


    const templates = [
        { icon: "add", text: "new"},
            /*
        { icon: "code", text: "UML Diagram"},
        { icon: "language", text: "Network Overview"},
        { icon: "autorenew", text: "Generic UI/UX Flow"},
        { icon: "assignment", text: "Feature UI/UX Flow"},
        { icon: "web", text: "Website Outline"},

             */
    ];

</script>

<section id="create-screen">

    <h2>{lang.create.title}</h2>

    <p>
			{lang.create.body}

        <br/><br/>

			{lang.create.texta} <a target="_blank" href="https://www.graphviz.org/">graphviz.org</a> {lang.create.textb}

    </p>

    <br/><br/>


	{#each templates as {text, icon}, i}

      <Card on:click={handleTemplatePick}>

          <Media class="card-media-square" aspectRatio="square">

              <div>

                  <i class="material-icons large" disabled style="width:100%">
                      {icon}
                  </i>

                  <br/>

                  <Text>{text}</Text>

              </div>

          </Media>

      </Card>

	{/each}

</section>
