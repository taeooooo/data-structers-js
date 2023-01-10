import * as List from "./lib/List-fp.js";

function Todo(todo, date) {
  this.date = date;
  this.todo = todo;
}

let todoList = [];

todoList = List.append(todoList)(new Todo("자바스크립트 공부", "2023-01-01"));
todoList = List.append(todoList)(new Todo("타입스크립트 공부", "2023-01-02"));
todoList = List.append(todoList)(
  new Todo("함수형프로그래밍 공부", "2023-01-03")
);

console.log(todoList);

console.log(List.getFrontItem(todoList)());
console.log(List.getEndItem(todoList)());
console.log(List.getItemByIndex(todoList)(1));

console.log(List.remove(todoList)(new Todo("자바스크립트 공부", "2023-01-01")));

console.log(
  List.contains(todoList)(new Todo("자바스크립트 공부", "2023-01-01"))
);
