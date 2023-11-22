"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var readlineSync = require('readline-sync');
var Library = /** @class */ (function () {
    function Library() {
        this.adminName = [];
        this.adminID = [];
        this.userName = [];
        this.userID = [];
        this.bookTitle = [];
        this.bookAuthor = [];
        this.bookID = [];
        this.bookAvailability = [];
        this.issuedBookCount = [];
    }
    Library.prototype.registerUSer = function (name) {
        this.userName.push(name);
        var currentUserID;
        currentUserID = "user" + Math.floor(100000 + Math.random() * 900000);
        this.userID.push(currentUserID);
        this.issuedBookCount.push(0);
        console.log("\n      User Registered Successfully!\n      User Name : ".concat(name, "\n      User ID : ").concat(currentUserID, "\n      NOTE : Please use this user ID as your login credentials !!"));
    };
    Library.prototype.registerAdmin = function (name) {
        this.adminName.push(name);
        var currentAdminID;
        currentAdminID = "admin" + Math.floor(100000 + Math.random() * 900000);
        this.adminID.push(currentAdminID);
        console.log("\n    Admin Registered Successfully!\n    Admin Name : ".concat(name, "\n    Admin ID : ").concat(currentAdminID, "\n    NOTE : Please use this user ID as your login credentials !!"));
    };
    Library.prototype.addBook = function () {
        var id = readlineSync.question("Enter the ID of the BOOK");
        var title = readlineSync.question("Enter the Title of the BOOK");
        var author = readlineSync.question("Enter the Name of the Author of the BOOK");
        this.bookID.push(id);
        this.bookTitle.push(title);
        this.bookAuthor.push(author);
        this.bookAvailability.push(1);
        console.log("Book Successfully Added");
    };
    Library.prototype.removeBook = function () {
        var id = readlineSync.question("Enter Name the Id of Book which you want to remove");
        for (var index in this.bookID) {
            if (this.bookID[index] == id) {
                this.bookID.splice(+index, 1);
                this.bookAuthor.splice(+index, 1);
                this.bookTitle.splice(+index, 1);
                this.bookAvailability.splice(+index, 1);
                return;
            }
        }
        console.log('No Book with given ID exist in record');
    };
    Library.prototype.viewAvailableBooks = function () {
        console.log("All The Available Books are Listed Below\n  ID          Title         Author ");
        for (var index = 0; index < this.bookID.length; index++) {
            if (this.bookAvailability[index] == 1) {
                console.log("   ".concat(this.bookID[index], "       ").concat(this.bookTitle[index], "      ").concat(this.bookAuthor[index]));
            }
        }
    };
    Library.prototype.findIndex = function (id, data) {
        for (var index = 0; index < data.length; index++) {
            if (id == data[index])
                return index;
        }
        return -1;
    };
    Library.prototype.returnBook = function () {
        var bookID = readlineSync.question("Enter the ID of Book You want to Return");
        var userID = readlineSync.question("Enter User ID for returning Book");
        var bookIndex = this.findIndex(bookID, this.bookID);
        if (bookIndex == -1) {
            console.log('No Book with given Id exist in our records');
            return;
        }
        if (userID == -1) {
            console.log('Invalid user ID');
            return;
        }
        var userIndex = this.findIndex(userID, this.userID);
        this.bookAvailability[bookIndex] = 1;
        this.issuedBookCount[userIndex] = this.issuedBookCount[userIndex] - 1;
        console.log("Book Returned Successfully and Now you have only ".concat(this.issuedBookCount[userIndex], " issued"));
    };
    Library.prototype.issueBook = function () {
        var bookID = readlineSync.question("Enter the ID of Book You want to Issue");
        var userID = readlineSync.question("Enter User ID for Issuing Book");
        var bookIndex = this.findIndex(bookID, this.bookID);
        if (bookIndex == -1) {
            console.log("Book with mentioned ID not found in our record please try with different ID");
            return;
        }
        var userIndex = this.findIndex(userID, this.userID);
        if (userIndex == -1) {
            console.log('User Account with mentioned credentials are not found please try again with different credentials');
            return;
        }
        if (this.bookAvailability[bookIndex] == 0) {
            console.log("Book is not available right now please try again later");
            return;
        }
        if (this.issuedBookCount[userIndex] == 3) {
            console.log("You have already published maximum allowed books please try again after returning some");
            return;
        }
        this.bookAvailability[bookIndex] = 0;
        this.issuedBookCount[userIndex] = this.issuedBookCount[userIndex] + 1;
        console.log("book issued successfully and now you have total ".concat(this.issuedBookCount[userIndex], " books issued"));
    };
    Library.prototype.searchBook = function () {
        var option = readlineSync.question("  Enter 1 If you want to Search by Book Title\n  Enter 2 If you want to Search by Author of Book");
        var name = readlineSync.question("Enter your Search Value Here : ");
        var index;
        if (option == 1) {
            index = this.findIndex(name, this.bookTitle);
        }
        else {
            index = this.findIndex(name, this.bookAuthor);
        }
        if (index == -1) {
            console.log("No Book Found with mentioned Details");
        }
        else {
            var availablity = void 0;
            if (this.bookAvailability[index] == 1) {
                availablity = "Available";
            }
            else {
                availablity = "Unavailable";
            }
            console.log("\n    Book ID : ".concat(this.bookID[index], "\n    Book Title : ").concat(this.bookTitle[index], "\n    Book Author : ").concat(this.bookAuthor[index], "\n    Availablity : ").concat(availablity));
        }
    };
    Library.prototype.validateCredentials = function (id, userType) {
        if (userType = 'Admin') {
            if (this.findIndex(id, this.adminID) != -1)
                return true;
        }
        if (userType = 'user') {
            if (this.findIndex(id, this.userID) != -1)
                return true;
        }
        return false;
    };
    Library.prototype.userLoginService = function () {
        console.log('inside user login service');
        var inputValue = 0;
        while (inputValue != -1) {
            inputValue = readlineSync.question("\n  Enter 1 for Issuing Book\n  Enter 2 for Returning Book\n  Enter 3 for Viewing all available books\n  Enter 4 for Searching Book\n  Enter -1 for Exit\n  ");
            if (inputValue == 1) {
                this.issueBook();
            }
            else if (inputValue == 2) {
                this.returnBook();
            }
            else if (inputValue == 3) {
                this.viewAvailableBooks();
            }
            else if (inputValue == 4) {
                this.searchBook();
            }
            else {
                console.log("Invalid Input");
            }
        }
    };
    Library.prototype.adminLoginService = function () {
        var inputValue = 0;
        while (inputValue != -1) {
            inputValue = readlineSync.question("\n  Enter 1 for Adding Book\n  Enter 2 for Removing Book\n  Enter 3 for Viewing all available books\n  Enter 4 for Searching Book\n  Enter -1 for Exit\n  ");
            if (inputValue == 1) {
                this.addBook();
            }
            else if (inputValue == 2) {
                this.removeBook();
            }
            else if (inputValue == 3) {
                this.viewAvailableBooks();
            }
            else if (inputValue == 4) {
                this.searchBook();
            }
            else {
                console.log("Invalid Input");
            }
        }
    };
    return Library;
}());
exports.Library = Library;
