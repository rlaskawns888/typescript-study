import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

const sampleTodos : TodoItem[] = data.map ( (item) => new TodoItem(item.id, item.task, item.complete) );

const myTodoCollection = new TodoCollection("Sample Todo List", sampleTodos);

myTodoCollection.addTodo("B-1");
myTodoCollection.addTodo("C-1");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());


