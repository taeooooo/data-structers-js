import Queue from "./lib/Queue.js";

let queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");

console.log(queue.data);
console.log(queue.dequeue());
console.log(queue.data);
