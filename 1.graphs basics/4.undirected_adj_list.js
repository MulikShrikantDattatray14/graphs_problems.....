function createGraph(n, edges) {
    // Adjacency list for undirected graph
    // Time complexity: O(2E)
    const adj = new Array(n + 1).fill(null).map(() => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Print the adjacency list
    console.log('Adjacency List:', adj);
}

// Example: Create a graph with 4 vertices and 3 edges
const n = 4;
const edges = [
    [1, 2],
    [2, 3],
    [3, 4]
];

createGraph(n, edges);
