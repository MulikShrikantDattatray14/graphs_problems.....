function dfs(node, adj, vis, ls) {
  vis[node] = 1;
  ls.push(node);
  const neighbors = adj[node];
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];
    if (vis[neighbor] == 0) {
      vis[neighbor] = 1;
      dfs(neighbor, adj, vis, ls);
    }
  }
}

function dfsOfGraph(V, adj) {
  const vis = Array(V).fill(0);
  const start = 0;
  const ls = [];
  dfs(start, adj, vis, ls);
  return ls;
}

function addEdge(adj, u, v) {
  adj[u].push(v);
  adj[v].push(u);
}

function printAns(ans) {
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i] + " ");
  }
}

const adj = [];
for (let i = 0; i < 5; i++) {
  adj.push([]);
}

addEdge(adj, 0, 2);
addEdge(adj, 2, 4);
addEdge(adj, 0, 1);
addEdge(adj, 0, 3);

const ans = dfsOfGraph(5, adj);
printAns(ans);
