"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data = [
    { id: 1, task: "A-1", complete: true },
    { id: 2, task: "A-2", complete: false }
];
console.log(data);
for (let i = 0; i < data.length; i++) {
    let val = data[i];
    let todoItem = new TodoItem_1.default(val.id, val.task, val.complete);
    todoItem.printDetails();
}
