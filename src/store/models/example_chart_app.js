export default `
digraph G {

  graph [concentrate=true,ranksep=0.3,nodesep=0.2, splines="ortho", bgcolor="transparent", fontcolor="white", color="white", fontsize = 12, labelloc = "t",label="reactiveChartInterface - app states", fontname = "Nramit", compound = true ];
  node [ fontcolor="white", color="white",shape = "record" fontsize = 9, width = 0, height = 0, margin = "0.2,0.1", fontname = "Niramit" ];
  edge [ fontcolor="white", color="white",fontsize = 10, arrowsize=0.7, fontname = "Niramit" ];

    graph [fontname = "Handlee"];
    node [fontname = "Handlee"];
    edge [fontname = "Handlee"];


  subgraph state {

    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];

  	STATE_INITIALIZATION;
    STATE_GRAPH_READY;
    STATE_GRAPH_EDIT;

    STATE_GRAPH_FAILSAFE;
    STATE_GRAPH_UPDATE;
    STATE_GRAPH_SUCCESS;
    STATE_GRAPH_FAIL;

  }



  subgraph dialogs {

    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];
    node [ fontcolor="white", color="white",shape = "record" fontsize = 8, width = 0, height = 0, margin = "0,0", fontname = "Niramit" ];

  	DIALOG_WELCOME;


      DIALOG_WELCOME->_UPLOAD,_CREATE,_DEFAULT[style="dotted",arrowhead="obox"];
      _UPLOAD,_CREATE,_DEFAULT -> STORAGE[style="dotted",arrowhead="odot", arrowsize=0.5];
    DIALOG_SETTINGS;
    DIALOG_ADD;
    DIALOG_EDIT;

  }

    subgraph storage {

      graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];
      node [ fontcolor="white", color="white",shape = "circle", fontsize = 8, width = 0, height = 0, margin = "0,0", fontname = "Niramit" ];

      STORAGE[shape="circle", fontcolor="black", fillcolor="white", style="filled"];

    }

      subgraph status {

        node [style="diagonals"];

        STATUS_ERROR;

      }

      subgraph if {
        graph [concentrate=true,ranksep=0.3,nodesep=0.2, splines="default"];
        node [ fontcolor="white", color="white",shape = "diamond" fontsize = 8, width = 0, height = 0, margin = "0.01,0.01", fontname = "Niramit" ];
        IF_FIRSTRUN;
        IF_STORAGE;

        STATE_INITIALIZATION:s ->IF_FIRSTRUN:n;

        IF_FIRSTRUN:s ->IF_STORAGE [label="false",style="dashed",arrowhead="ediamond",constraint=true];


        DIALOG_WELCOME -> STORAGE[style="dotted",arrowhead="odot", arrowsize=0.5];
        IF_FIRSTRUN->DIALOG_WELCOME;
        IF_STORAGE->DIALOG_WELCOME[style="dashed",arrowhead="ediamond"];

        IF_STORAGE -> STORAGE[label="true", arrowhead="odot", arrowsize=0.5];


      }

      STORAGE -> STATE_GRAPH_READY;


STATE_GRAPH_READY->STATE_GRAPH_EDIT->STATE_GRAPH_UPDATE;

  STATE_GRAPH_READY->DIALOG_SETTINGS,DIALOG_EDIT,DIALOG_ADD -> STATE_GRAPH_UPDATE[style="dotted",arrowsize=0.5];



  STATE_GRAPH_UPDATE->STATE_GRAPH_SUCCESS->STATE_GRAPH_READY;

  STATE_GRAPH_UPDATE->STATE_GRAPH_FAIL;
  STATE_GRAPH_FAIL->STATE_GRAPH_FAILSAFE->STATE_GRAPH_READY;

  STATE_GRAPH_FAILSAFE->STATUS_ERROR[style="dashed",arrowsize=0.5, arrowhead=none];

}
`;
