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

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Front element: ", queue.front()); // Output: 1

console.log("Dequeued element: ", queue.dequeue()); // Output: 1

console.log("Queue size: ", queue.size()); // Output: 2





//Most optimisied queue implementation 

function Queue() {
    var a = [],
        b = 0;
    this.getLength = function () {
        return a.length - b;
    };
    this.isEmpty = function () {
        return 0 == a.length;
    };
    this.enqueue = function (b) {
        a.push(b);
    };
    this.dequeue = function () {
        if (a.length === 0) return undefined;
        const c = a[b++];
        if (2 * b >= a.length) {
            a = a.slice(b);
            b = 0;
        }
        return c;

    };

    this.peek = function () {
        return 0 < a.length ? a[b] : void 0;
    };
}