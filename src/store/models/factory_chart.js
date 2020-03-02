
const graphviz_chart = {
  graph:{
    fontname:"Handlee",
    bgcolor:"transparent",
    fontcolor:"white",
    color:"white",
    fontsize:12,
    labelloc:"t",
    label:"reactiveChartInterface-DataFlow",
    fontname:"Nramit",
    compound:true
  },
  node:{
    fontname:"Handlee",
    fontcolor:"white",
    colo:"white",
    shape:"record",
    fontsize:12,
    width:0,
    height:0,
    margin:"0.2,0.1",
    fontname:"Niramit"
  },
  edge:{
    fontcolor:"white",
    color:"white",
    fontsize:10,
    fontname:"Niramit"
  },
  subgraph:[
    {
      graph:{
        label:"main [entry] [initial]",
        fontcolor: "0,0,0.28",
        bgcolor:"0,0,0.95",
        color: "0,0,0.55"
      },
      node:{

      },
      edge:{

      },
      connections:[
        'graphviz',
        'redux',
        'svelte',
        'graphviz,redux,svelte -> app',
      ]
    }
  ],
  connections:[

  ]
}



export default `
digraph A {

}
`;
