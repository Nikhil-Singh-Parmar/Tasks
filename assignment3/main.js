"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
var library_1 = require("./library");
var newLibrary = new library_1.Library();
var inputValue = 0;
while (inputValue != -1) {
    inputValue = readlineSync.question("\n  !!!!!!!!!!!!!!!!!   Welcome to Our Library   !!!!!!!!!!!!!!!!!!\n  Enter 1 for Registration\n  Enter 2 for Login\n  Enter -1 to Exit\n  ");
    if (inputValue == 1) {
        var inputValue2 = readlineSync.question("\n  Enter 1 for Admin Registration\n  Enter 2 for User Registration\n  ");
        if (inputValue2 == 1) {
            var name_1 = readlineSync.question("Enter your Name for registering as Admin");
            newLibrary.registerAdmin(name_1);
        }
        else if (inputValue2 == 2) {
            var name_2 = readlineSync.question("Enter your Name for registering as User");
            newLibrary.registerUSer(name_2);
        }
    }
    else if (inputValue == 2) {
        var inputValue2 = readlineSync.question("\n  Enter 1 for Admin Login/Services\n  Enter 2 for User Login/Services\n  ");
        if (inputValue2 == 1) {
            var id = readlineSync.question("Enter your credentials for logging in as Admin");
            if (newLibrary.validateCredentials(id.toLowerCase(), "Admin")) {
                newLibrary.adminLoginService();
            }
            else {
                console.log("Invalid Login Credentials");
            }
        }
        else if (inputValue2 == 2) {
            var id = readlineSync.question("Enter your credentials for logging in as User");
            if (newLibrary.validateCredentials(id.toLowerCase(), "user")) {
                newLibrary.userLoginService();
            }
            else {
                console.log("Invalid Login Credentials");
            }
        }
    }
    else if (inputValue != -1) {
        console.log('Invalid Input please select a number from 1, 2 and -1');
    }
}
