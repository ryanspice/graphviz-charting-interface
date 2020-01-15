
import application from "./controllers/application";

const __TEST_GRAPH__ = "./models/example_chart_app.js";

interface GraphRow {
  id:any;
  name:any;
  Task:any;
  Cook:any;
  todo:any;
}

/**
 * Better name to be decided, handles all details of graph
 * @type {GraphStore}
 */

export default class GraphStore {

  map:Map = new Map();

  #style:Function<String> = (style:String) => {
    this.map.set('style',`${style}`);
    return this.map.get('style');
  };

  #node:Function<String> = (data:GraphRow) => {

    return `node_${unique_id(data?.id)}[${this.#table(data)}]`;
  };

  #table:Function<String> = (data:GraphRow) => {

    return `label=<
     <table border="1" cellborder="0" cellspacing="1">
       <tr><td align="left"><b>${data?.Task}</b></td></tr>
       <tr><td align="left">${data?.Cook}</td></tr>
       <tr><td align="left"><font color="red">${data?.todo}</font></td></tr>
     </table>>`;
  };

  #set:Function<void> = (key:String, value:any) => {
    this.map.set(key,value);
    return this.map.get(key);
  };

  #buildSubgraph({name, style, items}) {

    let nodes:string = '';
    items.forEach(item=>nodes+=item.name+`;
`);

let graph = `subgraph ${name || "cluster"} {
    ${style}
    ${nodes}
}`;

    const subgraphs = this.map.get('subgraphs') || [];
    subgraphs.push(graph);
    this.map.set('subgraphs',subgraphs);
    return this.map.get('subgraphs');

    //console.log(graph);
    //return graph;
  }

  /**/

  #buildConnections(first) {
    this.map.set('connections', first.trim());
  }

  /**/

  #closeData(){

    this.data+=`}`;
    //console.log(this.data)
  }

  /**/

  #buildGraph(){

    this.data = `digraph D {
    ${this.#style(`
    graph [ fontsize = 12, labelloc = "t",label="Example", fontname = "gotham-book,sans-serif", compound = true ];
    node [ fontsize = 12, width = 0, height = 0, margin = "0.2,0.1", fontname = "gotham-book,sans-serif" ];
    edge [ fontsize = 10, fontname = "gotham-book,sans-serif" ];
    `)}
    `;
    this.data+=this.map.get('connections') || "";
    this.data+=this.map.get('subgraphs') || "";
  }

  /**/

  async #parseGraph(){

    const graph:String = (await import(__TEST_GRAPH__)).default  ;
    const file:Array<String> = graph.match(/[^\r\n]+/g);

    // CONNECTIONS

    const checkForConnection = (item) => {
      let arrow = item.indexOf('->')>-1;
      let close = (item.trim().charAt(item.trim().length-1)===";");
      item = item.trim();
      if ((arrow)&&(close))
        return true;
    };

    this.#buildConnections(this.#set('connections',file.filter(checkForConnection).join("\n")));

    // SUBGRAPHS

    let subgraphTemp = ``;
    let subgraphLast = false;

    const checkForSubgraph = (item) => {

      let arrow = item.indexOf('->')>-1;
      const subgraph = item.indexOf('subgraph')>-1;
      const close = item.trim()==="}";

      if (subgraph){
        subgraphLast = subgraph;
        subgraphTemp+=`\n`;
      }

      if (subgraphLast){
        subgraphTemp+=item;
      }

      if (close) {
        subgraphLast = false;
      }

      //if (arrow);
      //return false;

      return false;
    };

    let graphs;
    file.filter(checkForSubgraph);

    //CLUSTERS

    graphs = subgraphTemp.match(/[^\r\n]+/g).map(item =>{

      let b;
      (b = item.trim().split(" ").filter(item => {return item==""?false:true}));
      return `${b[1]}`;

    });

    graphs.forEach((item)=>{

      this.#buildSubgraph({
        name:item,
        style:'node[ fontname="Sans serif" fontsize="8"] graph[label = "microfrontend Services"]',
        items:[
          {name:'componentServices'},
          {name:'microfrontendServices'}
        ]
      });

    });

    this.data = graph;

  }

  /**/

  get connections(){

    return [...(this.map.get('connections').match(/[^\r\n]+/g))].map(item => {return {name:item}});
  }

  /**/

  get subgraphs(){
    let graphs = ``;
    this.map.get('subgraphs').forEach(str => {
      graphs+=`\n`+ String(str.match(/[^\r\n]+/g)[0].replace('subgraph','').replace('{','')).trim();
    });
    return [...(graphs.match(/[^\r\n]+/g))].map(item => {return {name:item, icon:"show_chart"}});
  }

  /**
   * [name description]
   * @type {String}
   */

   get digraph(){
     return this.map.get('digraph');
   }

  /**/

  constructor(){

    this.initialize();

  }

  /**/

  async initialize(){
    this.#buildGraph();
    this.#parseGraph();
    this.#closeData();
    let name = "d"
    this.data = `digraph ${name} {
  ${this.map.get("style") + (this.map.get("subgraphs")||[]).join("\n") + this.map.get("connections")}
}`;
  }

}

export {
  application
}
