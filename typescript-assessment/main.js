"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_1 = require("./todo");
var userInput = 0;
var todoList = new todo_1.ToDo();
while (userInput != 5) {
    userInput = todo_1.readlineSync.question("Welcome to ToDo Application\nEnter 1 for adding a new Task\nEnter 2 for changing status of a task\nEnter 3 for deleting the task\nEnter 4 for Viewing all tasks\n");
    if (userInput == 1) {
        todoList.addTask();
    }
    else if (userInput == 2) {
        todoList.updateStatus();
    }
    else if (userInput == 3) {
        todoList.deleteTodo();
    }
    else if (userInput == 4) {
        todoList.viewToDos();
    }
    else if (userInput != 5) {
        console.log("Invalid Input !! please enter a number between 1 to 5");
    }
}
