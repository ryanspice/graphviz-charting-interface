export default `
digraph A {

  graph [ bgcolor="transparent", fontcolor="white", color="white", fontsize = 12, labelloc = "t",label="reactiveChartInterface-DataFlow", fontname = "Nramit", compound = true ];
  node [ fontcolor="white", color="white",shape = "record" fontsize = 12, width = 0, height = 0, margin = "0.2,0.1", fontname = "Niramit" ];
  edge [ fontcolor="white", color="white",fontsize = 10, fontname = "Niramit" ];

    graph [fontname = "Handlee"];
    node [fontname = "Handlee"];
    edge [fontname = "Handlee"];


  subgraph theme {

    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];

  	graphviz;
    redux;
    svelte;

    graphviz,redux,svelte -> app;

  }

}
`;
