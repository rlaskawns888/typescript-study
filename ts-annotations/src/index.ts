import TodoItem from "./TodoItem";

const data = [
    { id: 1, task:"A-1", complete: true }
    , { id: 2, task:"A-2", complete: false }
];

console.log(data);

for(let i = 0; i<data.length; i++) {
    let val =  data[i];
    let todoItem = new TodoItem(val.id, val.task, val.complete);
    todoItem.printDetails();
}