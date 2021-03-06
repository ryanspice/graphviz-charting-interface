export default `digraph B {
  graph [ rankdir = LR, splines = "ortho", fontsize = 12, label = "c4f6aab828f8bd68f4a5", labelloc = "t", fontname = "gotham-book,sans-serif", compound = true ];
  node [ fontsize = 12, width = 0, height = 0, margin = "0.2,0.1", fontname = "gotham-book,sans-serif" ];
  edge [ fontsize = 10, fontname = "gotham-book,sans-serif" ];

subgraph "cluster_0" {
  graph [ label = "main [entry] [initial]", fontcolor = "0,0,0.28", bgcolor = "0,0,0.95", color = "0,0,0.55" ];
subgraph "cluster_@babel/runtime" {
  graph [ label = "@babel/runtime", fillcolor = "0.2916666666666667,0,0.85", color = "0.2916666666666667,0,0.45", style = "filled", URL = "https://www.npmjs.com/package/@babel/runtime", target = "npm" ];
  "./node_modules/@babel/runtime/helpers/defineProperty.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "defineProperty.js", shape = rect, URL = "https://unpkg.com/@babel/runtime/helpers/defineProperty.js", target = "_blank" ];
}

subgraph "cluster_loglevel-plugin-prefix" {
  graph [ label = "loglevel-plugin-prefix", fillcolor = "0.2916666666666667,0,0.85", color = "0.2916666666666667,0,0.45", style = "filled", URL = "https://www.npmjs.com/package/loglevel-plugin-prefix", target = "npm" ];
  "./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "loglevel-plugin-prefix.js", shape = rect, URL = "https://unpkg.com/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js", target = "_blank" ];
}

subgraph "cluster_loglevel" {
  graph [ label = "loglevel", fillcolor = "0.2916666666666667,0,0.85", color = "0.2916666666666667,0,0.45", style = "filled", URL = "https://www.npmjs.com/package/loglevel", target = "npm" ];
  "./node_modules/loglevel/lib/loglevel.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "loglevel.js", shape = rect, URL = "https://unpkg.com/loglevel/lib/loglevel.js", target = "_blank" ];
}

  "0" [ fillcolor = "0.16666666666666666,0.19,0.94", color = "0.16666666666666666,0.73,0.71", fontcolor = "0.16666666666666666,0.97,0.35", style = "filled", labelloc = "c", label = "src", shape = rarrow, margin = "0.15" ];
  "./src/def/log.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "log.js", shape = rect ];
  "./src/def/utils sync recursive \\\\.js$" [ fillcolor = "0.16666666666666666,0.19,0.94", color = "0.16666666666666666,0.73,0.71", fontcolor = "0.16666666666666666,0.97,0.35", style = "filled", labelloc = "c", label = ".js$", shape = rect ];
  "./src/def/utils.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "utils.js", shape = rect ];
  "./src/def/utils/fetchJsonp.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "fetchJsonp.js", shape = rect ];
  "./src/def/utils/hash.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "hash.js", shape = rect ];
  "./src/def/utils/index.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "index.js", shape = rect ];
  "./src/def/utils/storage/storage.getobject.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "storage.getobject.js", shape = rect ];
  "./src/def/utils/storage/storage.setobject.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "storage.setobject.js", shape = rect ];
  "./src/def/utils/toUrlEncoded.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "toUrlEncoded.js", shape = rect ];
  "./src/index.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "index.js", shape = rect ];
  "./src/svc/api sync recursive \\\\.js$" [ fillcolor = "0.16666666666666666,0.19,0.94", color = "0.16666666666666666,0.73,0.71", fontcolor = "0.16666666666666666,0.97,0.35", style = "filled", labelloc = "c", label = ".js$", shape = rect ];
  "./src/svc/api/base/service.http.js" [ fillcolor = "0.16666666666666666,0.19,0.94", color = "0.16666666666666666,0.73,0.71", fontcolor = "0.16666666666666666,0.97,0.35", style = "filled", labelloc = "c", label = "service.http.js + 6 modules", shape = rect ];
  "./src/svc/api/base/service.log.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.log.js", shape = rect ];
  "./src/svc/api/base/service.session.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.session.js", shape = rect ];
  "./src/svc/api/index.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "index.js", shape = rect ];
  "./src/svc/api/service.env.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.env.js", shape = rect ];
  "./src/svc/api/service.iam.classic.login.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.iam.classic.login.js", shape = rect ];
  "./src/svc/api/service.iam.login.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.iam.login.js", shape = rect ];
  "./src/svc/api/service.login.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.login.js", shape = rect ];
  "./src/svc/api/service.module.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.module.js", shape = rect ];
  "./src/svc/api/service.shell.config.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.shell.config.js", shape = rect ];
  "./src/svc/api/service.sso.jwt.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.sso.jwt.js", shape = rect ];
  "./src/svc/api/service.sso.login.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.sso.login.js", shape = rect ];
  "./src/svc/api/service.sso.user.js" [ fillcolor = "0.2916666666666667,0.19,0.94", color = "0.2916666666666667,0.73,0.71", fontcolor = "0.2916666666666667,0.97,0.35", style = "filled", labelloc = "c", label = "service.sso.user.js", shape = rect ];
  "cluster_0hidden" [ style = "invis", label = "", fixedsize = true, margin = "0", width = 0, height = 0 ];
}

  "0";
  "file_adesauifoundation.js" [ labelloc = "c", label = "adesauifoundation.js", shape = rect, fillcolor = "0.625,0.19,0.94", color = "0.625,0.73,0.71", fontcolor = "0.625,0.97,0.35", style = "filled" ];
  "./src/svc/api/base/service.http.js";
  "./src/def/log.js";
  "./src/svc/api/base/service.log.js";
  "./src/svc/api/base/service.session.js";
  "./src/svc/api/service.login.js";
  "./src/def/utils/index.js";
  "./src/def/utils sync recursive \\\\.js$";
  "./src/index.js";
  "./src/def/utils.js";
  "./src/svc/api/service.iam.classic.login.js";
  "./src/svc/api/service.iam.login.js";
  "./src/def/utils/fetchJsonp.js";
  "./src/def/utils/hash.js";
  "./src/def/utils/storage/storage.getobject.js";
  "./src/def/utils/storage/storage.setobject.js";
  "./src/def/utils/toUrlEncoded.js";
  "./src/svc/api/index.js";
  "./src/svc/api sync recursive \\\\.js$";
  "./src/svc/api/service.env.js";
  "./src/svc/api/service.module.js";
  "./src/svc/api/service.shell.config.js";
  "./src/svc/api/service.sso.jwt.js";
  "./src/svc/api/service.sso.login.js";
  "./src/svc/api/service.sso.user.js";
  "./node_modules/@babel/runtime/helpers/defineProperty.js";
  "./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js";
  "./node_modules/loglevel/lib/loglevel.js";
  "cluster_0hidden";
  "./src/svc/api/base/service.http.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.log.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.log.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/def/log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils/index.js" -> "./src/def/utils sync recursive \\\\.js$" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/index.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/index.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.iam.classic.login.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.iam.login.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/def/utils.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils sync recursive \\\\.js$" -> "./src/def/utils/fetchJsonp.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils sync recursive \\\\.js$" -> "./src/def/utils/hash.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils sync recursive \\\\.js$" -> "./src/def/utils/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils.js" -> "./src/def/utils/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils.js" -> "./src/def/utils/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils.js" -> "./src/def/utils/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils.js" -> "./src/def/utils/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils sync recursive \\\\.js$" -> "./src/def/utils/storage/storage.getobject.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils sync recursive \\\\.js$" -> "./src/def/utils/storage/storage.setobject.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils sync recursive \\\\.js$" -> "./src/def/utils/toUrlEncoded.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "0" -> "./src/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/index.js" -> "./src/svc/api sync recursive \\\\.js$" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.env.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.env.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.env.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.iam.classic.login.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.iam.login.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.module.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.module.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.shell.config.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.shell.config.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.sso.jwt.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.sso.jwt.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.sso.login.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.sso.login.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.sso.user.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.sso.user.js" -> "./src/svc/api/base/service.http.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/base/service.log.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/base/service.session.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/svc/api/base/service.session.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./src/svc/api/base/service.session.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/index.js" -> "./src/svc/api/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/index.js" -> "./src/svc/api/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/index.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.env.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.iam.classic.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.iam.classic.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.iam.classic.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.iam.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.iam.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.iam.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.module.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.shell.config.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.sso.jwt.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.sso.jwt.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.sso.jwt.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.sso.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.sso.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.sso.login.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api sync recursive \\\\.js$" -> "./src/svc/api/service.sso.user.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.sso.user.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.login.js" -> "./src/svc/api/service.sso.user.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils/fetchJsonp.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils/fetchJsonp.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils/fetchJsonp.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/utils/fetchJsonp.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.http.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/base/service.session.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.iam.classic.login.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/svc/api/service.iam.classic.login.js" -> "./node_modules/@babel/runtime/helpers/defineProperty.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/log.js" -> "./node_modules/loglevel-plugin-prefix/lib/loglevel-plugin-prefix.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "./src/def/log.js" -> "./node_modules/loglevel/lib/loglevel.js" [ arrowsize = .75, color = "0,0.73,0.71" ];
  "cluster_0hidden" -> "file_adesauifoundation.js" [ arrowsize = .75, color = "0.625,0.73,0.71", ltail = "cluster_0" ];
}`;
