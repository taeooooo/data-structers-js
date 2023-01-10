import List from "./lib/List.js";

const list = new List();

list.append("A");
list.append("C");
list.insert("B", "A");
console.log(list.toString()); // A,B,C

list.front();
console.log(list.getElement()); // A

list.end();
console.log(list.getElement()); // C

list.moveTo(1);
console.log(list.getElement()); // B

list.front();
console.log(list.getElement()); // A

list.next();
console.log(list.getElement()); // B

list.next();
console.log(list.getElement()); // C

list.prev();
console.log(list.getElement()); // B
