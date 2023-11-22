"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require('readline-sync');
var bank_1 = require("./bank");
var bank = new bank_1.UserAccount();
var inputValue = 0;
while (inputValue != 6) {
    inputValue = readlineSync.question("Enter your option: Welcome to Our Bank Application\n  1. Open Savings or Current Account\n  2. View Balance\n  3. View Customer Data\n  4. Withdraw Money\n  5. Deposit Money\n  6. Exit from Application\n  ");
    if (inputValue == 1) {
        bank.newAccount();
    }
    else if (inputValue == 2) {
        bank.viewAccountBalance();
    }
    else if (inputValue == 3) {
        bank.viewUserData();
    }
    else if (inputValue == 4) {
        bank.withdrawMoney();
    }
    else if (inputValue == 5) {
        bank.depositMoney();
    }
    else if (inputValue != 6) {
        console.log('Invalid Input please select a number between 1 to 6;');
    }
}
