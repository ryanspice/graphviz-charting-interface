export default `
digraph reactiveChartInterface {

  graph [ bgcolor="transparent", fontcolor="white", color="white", fontsize = 12, labelloc = "t",label="reactiveChartInterface", fontname = "Nramit", compound = true ];
  node [ fontcolor="white", color="white",shape = "record" fontsize = 12, width = 0, height = 0, margin = "0.2,0.1", fontname = "Niramit" ];
  edge [ fontcolor="white", color="white",fontsize = 10, fontname = "Niramit" ];

    graph [fontname = "Handlee"];
    node [fontname = "Handlee"];
    edge [fontname = "Handlee"];

  subgraph theme {

    graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];

  	colors;
    mixins;
    material;

  }
  subgraph app {

    index[label="index.js"];
    scss[label="main.scss"];
  }
  subgraph store {
    redux[label="store" shape = "circle"];
  }
  subgraph utils {
    utils;
    storage;
    fullscreen;
    download;

    utils -> fullscreen;
    fullscreen ->redux[dir="both"];

    redux -> first[style="invis"];
    first -> redux[label="dispatch"];

    utils -> download;
    download -> redux[dir="both"];

    redux -> second[style="invis"];
    second -> redux[label="dispatch"];

    utils -> storage;
    storage->redux[dir="both"];

  }

  subgraph ui {
    app [
            label = "{App}"
            shape = "record"
    ]
    first [
      label = "{First Toolbar|+ title : string\|+ drawer() : boolean\|+ color() : state\|+ fullscreen() : boolean\}"
      shape = "record"
    ]
    second [
            label = "{Second Toolbar|+ name : string\l+ age : int\l|+ die() : void\l}"
            shape = "record"
    ]
    drawer [
            label = "{Drawer|+ data() : Array\}"
            shape = "record"
    ]
    drawerItem [
            label = "{Item|title : String\|nodes : Array\}"
            shape = "record"
    ]
    drawerHoverFab [
            label = "{HoverFab|title : String\|nodes : Array\|+ modify() : Promise\}"
            shape = "record"
    ]
    content [
            label = "{Graph|+ data() : Array\}"
            shape = "record"
    ]
  }

scss->index;

colors, mixins, material -> scss;

drawerItem -> drawerHoverFab[style=dotted, label="modify"];
drawerHoverFab -> redux[label="dispatch",style=dotted];
drawerHoverFab -> app;

drawer -> drawerItem[label="" dir="both"];

drawer -> redux[label="subscribe" dir="both"];
drawer->app;

content -> redux[label="subscribe" dir="both"];
content->app;

first, second -> app -> index;


}
`;
