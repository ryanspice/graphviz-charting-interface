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
    STATE_GRAPH_INITIALIZE;
    STATE_GRAPH_READY;
    STATE_GRAPH_EDIT[label="{ STATE_GRAPH_EDIT}"];
    STATE_GRAPH_UPDATE;
    STATE_GRAPH_SUCCESS;
    STATE_GRAPH_FAIL;
  }

  subgraph dialogs {
    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];
    node [ fontcolor="white", color="white",shape = "record" fontsize = 8, width = 0, height = 0, margin = "0,0", fontname = "Niramit" ];
  	DIALOG_WELCOME;
      DIALOG_WELCOME->_UPLOAD,_CREATE,_DEFAULT[style="dotted",arrowhead="none"];
      _UPLOAD,_CREATE,_DEFAULT -> STORAGE[style="dotted",arrowhead="odot", arrowsize=0.5];
    DIALOG_SETTINGS;
    DIALOG_ADD;
    DIALOG_EDIT;
  }

  subgraph storage {
    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];
    node [ fontcolor="white", color="white",shape = "circle", fontsize = 8, width = 0, height = 0, margin = "0,0", fontname = "Niramit" ];
    STORAGE[label="STORAGE\n(redux)",shape="cylinder", fontcolor="black", margin=0.1, fillcolor="white", style="filled"];
    SERVER[label="SERVER\n",shape="cylinder", fontcolor="black", margin=0.1, fillcolor="white", style="filled"];
  }

  subgraph status {
    node [style="diagonals"];
    STATUS_ERROR;
    STATUS_SUCCESS -> SERVER[style="dotted",arrowhead="none"];
    STATUS_ERROR -> SERVER[style="dotted",arrowhead="none"];
  }

  subgraph if {
    graph [concentrate=true,ranksep=0.3,nodesep=0.2, splines="default"];
    node [ fontcolor="white", color="white",shape = "diamond" fontsize = 8, width = 0, height = 0, margin = "0.01,0.01", fontname = "Niramit" ];
    IF_FIRSTRUN;
    IF_STORAGE;
    IF_VERIFY;
    IF_INITIALIZED;
    STATE_INITIALIZATION:s ->IF_FIRSTRUN:n;

  }

  subgraph STATE_GRAPH_EDIT_GRAPH {
    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];
    node [ fontcolor="white", color="white",shape = "record" fontsize = 8, width = 0, height = 0, margin = "0,0", fontname = "Niramit" ];

    //_UPDATE;
    //_SOURCE;
    //_DIGRAPH;
  }

  subgraph DOT {
        node [ label="",shape="point" ];
      _DOT[label="",shape="point"];
      _DOT_INITIALISED[label="",shape="point"];

  }

  IF_FIRSTRUN:s ->IF_STORAGE [label="false",style="default"];
  IF_FIRSTRUN->DIALOG_WELCOME [style="dashed",arrowhead="ediamond",constraint=true];
  IF_STORAGE->DIALOG_WELCOME[style="dashed",arrowhead="ediamond"];
  IF_STORAGE -> STORAGE[label="true", arrowsize=0.5];




  dispatch[label="",shape="point"];
  STORAGE -> IF_INITIALIZED[arrowhead="none"];

  //IF_INITIALIZED -> _DOT_INITIALISED;
  IF_INITIALIZED -> STATE_GRAPH_INITIALIZE[label="   false"];
  IF_INITIALIZED -> STATE_GRAPH_READY[style="dashed",arrowhead="ediamond"];

  //      dispatch -> STATE_GRAPH_READY[style="dashed",arrowhead="ediamond"];



  STATE_GRAPH_INITIALIZE -> STATE_GRAPH_READY;
  //STATE_GRAPH_INITIALIZE -> STATE_GRAPH_UPDATE[style="normal",arrowhead="normal"];




  //STATE_GRAPH_INITIALIZE -> STATUS_ERROR[style="dashed",arrowhead="ediamond", constraint=false];
  //STATE_GRAPH_EDIT -> STATUS_ERROR[style="dashed",arrowhead="ediamond", constraint=false];

  STATE_GRAPH_READY -> STATE_GRAPH_EDIT;



  //STATE_GRAPH_READY -> DIALOG_SETTINGS,DIALOG_EDIT,DIALOG_ADD[style="dotted",arrowsize=0.5];
  //{DIALOG_SETTINGS,DIALOG_EDIT,DIALOG_ADD} -> _DOT[style="dotted", arrowhead="none"];
  //_DOT -> IF_VERIFY;


  STATE_GRAPH_SUCCESS -> STATE_GRAPH_UPDATE;
  //STATE_GRAPH_UPDATE -> STATE_GRAPH_READY;

  //STATE_GRAPH_EDIT -> STATE_GRAPH_SAVE -> STATE_GRAPH_UPDATE;


  STATE_GRAPH_EDIT_POINT[label="",shape="point"];
  //STATE_GRAPH_EDIT -> _SOURCE[style="dotted",arrowhead="none"];
  //STATE_GRAPH_EDIT -> _DIGRAPH[style="dotted",arrowhead="none"];

  //{ _SOURCE,_DIGRAPH} -> _UPDATE[style="dotted",arrowhead="none"];

  //_UPDATE -> STATE_GRAPH_UPDATE;


  //{_SOURCE, _DIGRAPH} -> STATE_GRAPH_EDIT[style="dotted",arrowhead="none"];
  STATE_GRAPH_EDIT -> IF_VERIFY[style="normal",arrowhead="none"];
  //_DOT -> IF_VERIFY [arrowhead="none"];


  DIALOG_WELCOME->_UPLOAD,_CREATE,_DEFAULT[style="dotted",arrowhead="obox"];
  _UPLOAD,_CREATE,_DEFAULT -> STORAGE[style="dotted",arrowhead="odot", arrowsize=0.5];



  //STATE_GRAPH_EDIT -> STATE_GRAPH_UPDATE;
  //STATE_GRAPH_UPDATE -> _DOT:e[arrowhead="none"];

  //STATE_GRAPH_UPDATE->IF_VERIFY;
  STATE_GRAPH_UPDATE->STORAGE[shape="triangle"];

  IF_VERIFY->STATE_GRAPH_SUCCESS;
  STATE_GRAPH_SUCCESS -> STATUS_SUCCESS[style="dotted",arrowhead="none"];

  IF_VERIFY->STATE_GRAPH_FAIL[style="dashed",arrowhead="ediamond"];

  //STATE_GRAPH_SUCCESS->STATE_GRAPH_SAVE->STATE_GRAPH_READY;

  //  dispatch->STATE_GRAPH_SAVE->IF_VERIFY;

  //IF_VERIFY->STATE_GRAPH_READY[];

  STATE_GRAPH_FAIL->STATUS_ERROR[style="dashed",arrowhead="ediamond"];


}
`;
