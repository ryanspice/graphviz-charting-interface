export default `
digraph D {

    graph [ fontsize = 12, labelloc = "t",label="Example", fontname = "gotham-book,sans-serif", compound = true ];
    node [ fontsize = 12, width = 0, height = 0, margin = "0.2,0.1", fontname = "gotham-book,sans-serif" ];
    edge [ fontsize = 10, fontname = "gotham-book,sans-serif" ];
      database:se -> server -> database:sw;
      server -> componentServices -> server;
      componentServices -> microfrontendServices -> componentServices;
      microfrontendServices -> microfrontendB, microfrontendA -> microfrontendServices;
      microfrontendB -> componentB -> microfrontendB;
      microfrontendA -> componentA -> microfrontendA;
      
      
      subgraph s {
      componentServices
microfrontendServices
}
      subgraph a {
      componentA
microfrontendA
}
      subgraph b {
      componentB
microfrontendB
}

      
      }
`;
