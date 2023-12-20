// Set fixed values for n and m
const n = 5;
const m = 7;

// Initialize the adjacency matrix
// time complexity: O(n)
const adj = [];
for (let i = 0; i <= n; i++) {
    adj.push(Array(n + 1).fill(0));
}
// Fixed input edges
const edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 1],
    [2, 4],
    [1, 5]
];

// Input edges for undirected graph
for (let i = 0; i < m; i++) {
    const [u, v] = edges[i];
    adj[u][v] = 1;
    adj[v][u] = 1; // Comment out this line for directed graph
}

// Output the adjacency matrix
console.log('Adjacency Matrix:');
for (let i = 1; i <= n; i++) {
    console.log(adj[i].slice(1).join(' '));
}
