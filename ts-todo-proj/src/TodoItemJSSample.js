class TodoItem {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`);
    }
}

const data = [
    { id: 1, task:"A-1", complete: true }
    , { id: 2, task:"A-2", complete: false }
];


// let todoItem = new TodoItem(data[0].id, data[0].task, data[0].complete);
// console.log(todoItem);

for(let i = 0; i<data.length; i++) {
    let val =  data[i];
    let todoItem = new TodoItem(val.id, val.task, val.complete);
    todoItem.printDetails();
}