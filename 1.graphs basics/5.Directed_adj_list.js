const n = 5; // Example value for n
const m = 4; // Example value for m

// Adjacency list for directed graph
// Time complexity: O(E)
const adj = Array.from({ length: n + 1 }, () => []);

// Example edges (u -> v)
const edges = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5]
];

for (const [u, v] of edges) {
  adj[u].push(v);
}

// Now 'adj' contains the adjacency list for the graph
console.log(adj);
