"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readlineSync = exports.ToDo = void 0;
var readlineSync = require('readline-sync');
exports.readlineSync = readlineSync;
var ToDo = /** @class */ (function () {
    function ToDo() {
        this.title = [];
        this.description = [];
        this.completionStatus = [];
    }
    ToDo.prototype.addTask = function () {
        var title = readlineSync.question('Enter Title of your Todo Task : ');
        var description = readlineSync.question('Enter description of Todo Task : ');
        this.title.push(title);
        this.description.push(description);
        this.completionStatus.push(false);
        console.log("Task Added successfully with title : ".concat(title));
    };
    ToDo.prototype.updateStatus = function () {
        var todoTaskTitle = readlineSync.question('Enter Title of your Todo Task which you want to mark as completed : ');
        for (var index = 0; index < this.title.length; index++) {
            if (todoTaskTitle.toLowerCase() == this.title[index].toLowerCase()) {
                this.completionStatus[index] = true;
                console.log("ToDo Task with title: ".concat(this.title[index], "'s status is updates successfully"));
                return;
            }
        }
        console.log("No task with title: ".concat(todoTaskTitle, " found in our records please try again with different todo Title"));
    };
    ToDo.prototype.deleteTodo = function () {
        var todoTaskTitle = readlineSync.question('Enter Title of your Todo Task which you want to mark as completed : ');
        for (var index = 0; index < this.title.length; index++) {
            if (todoTaskTitle.toLowerCase() == this.title[index].toLowerCase()) {
                this.title.splice(index, 1);
                this.description.splice(index, 1);
                this.completionStatus.splice(index, 1);
                console.log("ToDo Task deleted successfully");
                return;
            }
        }
        console.log("No task with title: ".concat(todoTaskTitle, " found in our records please try again with different todo Title"));
    };
    ToDo.prototype.viewToDos = function () {
        if (this.title.length == 0) {
            console.log("There is no task in your todo Yet");
            return;
        }
        console.log("S.No     TITLE            DESCRIPTION       COMPLETION STATUS");
        for (var index = 0; index < this.title.length; index++) {
            console.log("  ".concat(index, "   ").concat(this.title[index], "       ").concat(this.description[index], "      ").concat(this.completionStatus[index]));
        }
    };
    return ToDo;
}());
exports.ToDo = ToDo;
