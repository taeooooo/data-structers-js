import * as Stack from "./lib/Stack-fp.js";

const stack0 = [];
const stack1 = Stack.push(stack0)("A");
const stack2 = Stack.push(stack1)("B");
const stack3 = Stack.push(stack2)("C");

console.log(stack1);
console.log(stack2);
console.log(stack3);

console.log(Stack.pop(stack3)());
