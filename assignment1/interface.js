"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newAccount = exports.viewData = exports.viewBalance = exports.withdraw = exports.deposit = void 0;
var readlineSync = require('readline-sync');
var bank_1 = require("./bank");
var bank = new bank_1.UserAccount();
function newAccount() {
    var value = readlineSync.question("1. Savings\n  2. Current\n  Select 1 or 2");
    var accountType;
    if (value == 1) {
        accountType = 'savings';
    }
    else {
        accountType = 'current';
    }
    console.log("Creating a ".concat(accountType, " Account"));
    var name = readlineSync.question('Enter Your Name: ');
    var age = readlineSync.question('Enter Your Age: ');
    while (age < 18 || age > 68) {
        console.log('Age must be between 18 to 68 years');
        age = readlineSync.question('Enter Your Age: ');
    }
    var location = readlineSync.question('Enter Your Location: ');
    var state = readlineSync.question('Enter Your State: ');
    var country = readlineSync.question('Enter Your Country: ');
    var balance = readlineSync.question("Enter Initial balance for your ".concat(accountType, ": Account: "));
    var email = readlineSync.question('Enter Your Email ID: ');
    if (!validateEmail(email)) {
        console.log("Email ID is not in standard formart\n      NOTE : One more wrong attempt and your account registration will be cancelled");
        email = readlineSync.question('Re-enter Your Email ID: ');
        if (!validateEmail(email))
            return;
    }
    bank.registerUSer(name, age, location, state, country, email, balance, accountType);
}
exports.newAccount = newAccount;
var validateEmail = function (email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
function viewBalance() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    var accountBalance = bank.viewAccountBalance(accountNumber.toLowerCase());
    if (accountBalance == 0)
        console.log('Bank Account Not Found Please try again with different Bank Account: ');
    else {
        console.log("Account Balance for account number ".concat(accountNumber, " is ").concat(accountBalance));
    }
}
exports.viewBalance = viewBalance;
function viewData() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    bank.viewUserData(accountNumber.toLowerCase());
}
exports.viewData = viewData;
function withdraw() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    var amount = readlineSync.question("Enter the Amount you want to withdraw: ");
    bank.withdrawMoney(accountNumber.toLowerCase(), amount);
}
exports.withdraw = withdraw;
function deposit() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    var amount = readlineSync.question("Enter the Amount you want to Deposit: ");
    bank.depositMoney(accountNumber.toLowerCase(), amount);
}
exports.deposit = deposit;
