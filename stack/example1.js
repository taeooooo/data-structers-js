import Stack from "./lib/Stack.js";

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");

console.log(stack.data);
console.log(stack.peek());
console.log(stack.data);
