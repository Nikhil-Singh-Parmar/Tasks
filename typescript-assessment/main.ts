import { readlineSync,ToDo } from "./todo";
let userInput = 0;
const todoList = new ToDo();
while(userInput!=5){
    userInput = readlineSync.question(`Welcome to ToDo Application
Enter 1 for adding a new Task
Enter 2 for changing status of a task
Enter 3 for deleting the task
Enter 4 for Viewing all tasks
`);

    if(userInput==1){
        todoList.addTask();
    }
    else if(userInput==2){
        todoList.updateStatus();
    }
    else if(userInput==3){
        todoList.deleteTodo();
    }
    else if(userInput==4){
        todoList.viewToDos();
    }
    else if(userInput!=5){
        console.log("Invalid Input !! please enter a number between 1 to 5")
    }

}