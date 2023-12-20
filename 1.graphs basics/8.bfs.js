class Queue {
  constructor() {
    this.items = [];
  }
  // Enqueue: Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }
  // Dequeue: Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }
  // Front: Return the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
  // isEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // size: Return the number of elements in the queue
  size() {
    return this.items.length;
  }
}

function bfsOfGraph(V, adj) {
  const vis = new Array(V).fill(0);
  vis[0] = 1;
  const queue = new Queue();
  //// Enqueue: Add an element to the end of the queue
  queue.enqueue(0);
  const bfs = [];

  while (!queue.isEmpty()) {
    // Dequeue: Remove and return the front element of the queue(same like shift)
    const node = queue.dequeue();
    bfs.push(node);
    const neighbors = adj[node];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (vis[neighbor]==0) {
        vis[neighbor] = 1;
        // Enqueue: Add an element to the end of the queue
        queue.enqueue(neighbor);
      }
    }
  }

  return bfs;
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

const adj = Array.from({ length: 6 }, () => []);

addEdge(adj, 0, 1);
addEdge(adj, 1, 2);
addEdge(adj, 1, 3);
addEdge(adj, 0, 4);

const ans = bfsOfGraph(5, adj);
printAns(ans);

// code main logic :

// function bfsOfGraph(V, adj) {
//     const vis = new Array(V).fill(0);
//     vis[0] = 1;
//     const queue = [];
//     queue.push(0);
//     const bfs = [];
//     while (queue.length !== 0) {
//       const node = queue.shift();
//       bfs.push(node);
//       for (const neighbor of adj[node]) {
//         if (!vis[neighbor]) {
//           vis[neighbor] = 1;
//           queue.push(neighbor);
//         }
//       }
//     }
//     return bfs;
//   }

//   function addEdge(adj, u, v) {
//     adj[u].push(v);
//     adj[v].push(u);
//   }

//   function printAns(ans) {
//     for (let i = 0; i < ans.length; i++) {
//       console.log(ans[i] + " ");
//     }
//   }

//   const adj = Array.from({ length: 6 }, () => []);

//   addEdge(adj, 0, 1);
//   addEdge(adj, 1, 2);
//   addEdge(adj, 1, 3);
//   addEdge(adj, 0, 4);

//   const ans = bfsOfGraph(5, adj);
//   printAns(ans);
