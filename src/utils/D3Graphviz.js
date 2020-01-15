
/**
 * builds a graphviz object based on the D3 library
 * @param       {[type]} GraphStore [description]
 * @constructor
 */

const D3Graphviz = async function D3Graphviz(GraphStore, target = '.graph-container'){

  const D3 = (await import("d3-graphviz"));
  const D3Graph = await D3.graphviz(target);

  D3Graph.renderDot(GraphStore.data).on("end", function() {

    const svg = document.querySelector('body > section > div > section > svg');
    //const scale = 0.5;
    const scale = 1;
    const dimensions = {
      x:svg.getAttribute('width').split('pt')[0],
      y:svg.getAttribute('height').split('pt')[0]
    };

    dimensions.y = ((dimensions.y*scale)+(dimensions.y/window.innerHeight));
    dimensions.x = (-dimensions.x*scale)-((dimensions.x/window.innerWidth));

    //D3Graph._scale = 0.5;
    //D3Graph.scale(0.5);
    //D3Graph.zoomTranslateExtent         ([0,500]);
    //D3Graph.zoomScaleExtent([0,500]);
    //D3Graph._translation = {x:dimensions.x/2.75,y:dimensions.y+100};

    D3Graph.renderDot(GraphStore.data).on("end",function(){

      const drawer = document.querySelector('body > section > div > aside > div.mdc-drawer__content nav');
      const vlvp = document.querySelector('svelte-virtual-list-viewport');

      drawer.append(vlvp);

      const updateList = window.updateList;

      updateList([
        //{name:"Digraph", icon:"none"},
        {name:"G", icon:"insert_chart_outlined"},
        //{name:"Subgraphs", icon:"none"},
        ...GraphStore.subgraphs,
        //{name:"Connections", icon:"none"},
        ...GraphStore.connections
      ]);

      //window.store = GraphStore;
      const svg = document.querySelector('svg');
      svg.setAttribute("width","100%");
      svg.setAttribute("height","100%");

    });

  });

}
export default D3Graphviz;
