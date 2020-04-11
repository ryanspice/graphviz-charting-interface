<script>

    import {store} from "../../index";

    import {
        STATUS_STATE
    } from '../../store/actions/status';

    import "./Welcome.svelte.scss";

    import {Text} from '@smui/list';

    import Card, {Media} from '@smui/card';

    /**
     *
     */

    const handleCardUpload = () => {

        store.dispatch({
            type: STATUS_STATE,
            value: 1001
        });

    };

    /**
     *
     */

    const handleCardCreate = () => {

        store.dispatch({
            type: STATUS_STATE,
            value: 1002
        });

    };

    /**
     *
     */

    export let onInsertChart = () => {

    };


</script>

<section id="welcome-screen">

    <h2>{lang.welcome.welcome}</h2>

    <p>
        {lang.welcome.thanks}

        <br/><br/>

        {lang.welcome.see} <a target="_blank" href="https://www.graphviz.org/">graphviz.org</a> {lang.welcome.info}

    </p>

    <br/><br/>

    <Card on:click={handleCardUpload}>

        <Media class="card-media-square" aspectRatio="square">

            <div>

                <i class="material-icons large" disabled>
                    open_in_browser
                </i>

                <br/>

                <Text>{lang.welcome.buttons.upload}</Text>

            </div>

        </Media>

    </Card>

    <Card on:click={handleCardCreate}>

        <Media class="card-media-square" aspectRatio="square">

            <div>

                <i class="material-icons large" disabled>
                    insert_chart
                </i>

                <br/>

                <Text>{lang.welcome.buttons.create}</Text>

            </div>

        </Media>

    </Card>

    <section><a href="https://ryanspice.com/">ryanspice.com</a></section>

</section>
