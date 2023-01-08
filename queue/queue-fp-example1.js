import * as Queue from "./lib/Queue-fp.js";

const queue0 = [];

const queue1 = Queue.enqueue(queue0)("A");
const queue2 = Queue.enqueue(queue1)("B");
const queue3 = Queue.enqueue(queue2)("C");

console.log(queue3);
const queue4 = Queue.dequeue(queue3)();
console.log(queue4);
