"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
var readlineSync = require('readline-sync');
var UserAccount = /** @class */ (function () {
    function UserAccount() {
    }
    UserAccount.prototype.registerUSer = function (name1, age1, location1, state1, country1, email1, balance1, type1) {
        this.name = name1;
        this.age = age1;
        this.location = location1;
        this.state = state1;
        this.country = country1;
        this.email = email1;
        this.balance = balance1;
        var accountNumb;
        if (type1 == 'savings') {
            accountNumb = "sav" + Math.floor(100000 + Math.random() * 900000);
        }
        else {
            accountNumb = "cur" + Math.floor(100000 + Math.random() * 900000);
        }
        this.accountNumber = accountNumb;
        console.log("\n        ".concat(type1, " Account Created Successfully!\n        Account Details:\n        Customer Name: ").concat(name1, "\n        Email ID: ").concat(email1, "\n        Account Type: ").concat(type1, "\n        Total Balance: ").concat(balance1, "\n        Generated Account Number: ").concat(accountNumb));
    };
    UserAccount.prototype.newAccount = function () {
        var value = readlineSync.question("1. Savings\n      2. Current\n      Select 1 or 2");
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
        if (!this.validateEmail(email)) {
            console.log("Email ID is not in standard formart\n          NOTE : One more wrong attempt and your account registration will be cancelled");
            email = readlineSync.question('Re-enter Your Email ID: ');
            if (!this.validateEmail(email))
                return;
        }
        this.registerUSer(name, age, location, state, country, email, balance, accountType);
    };
    UserAccount.prototype.viewAccountBalance = function () {
        var accountNumber = readlineSync.question("Enter your Account Number: ");
        if (this.accountNumber === accountNumber.toLowerCase()) {
            console.log("Account Balance for account number ".concat(accountNumber, " is ").concat(this.balance));
            return;
        }
        console.log('Bank Account Not Found Please try again with different Bank Account: ');
    };
    UserAccount.prototype.viewUserData = function () {
        var accountNumber = readlineSync.question("Enter your Account Number: ");
        accountNumber = accountNumber.toLowerCase();
        var accountType;
        if (accountNumber[0] == 's') {
            accountType = "Savings";
        }
        else {
            accountType = "Current";
        }
        if (this.accountNumber == accountNumber) {
            console.log("\n        Account Holder Details:\n        Customer Name: ".concat(this.name, "\n        Location: ").concat(this.location, " \n        Country: ").concat(this.country, "\n        Email ID: ").concat(this.email, "\n        Account Type: ").concat(accountType, "\n        Total Balance: ").concat(this.balance, "\n        Account Number: ").concat(accountNumber));
            return;
        }
    };
    UserAccount.prototype.withdrawMoney = function () {
        var accountNumber = readlineSync.question("Enter your Account Number: ");
        var amount = readlineSync.question("Enter the Amount you want to withdraw: ");
        accountNumber = accountNumber.toLowerCase();
        if (this.accountNumber == accountNumber) {
            if (this.accountNumber[0] == "s") {
                if (this.balance - amount > 500) {
                    this.balance = this.balance - amount;
                    console.log("Amount withdrawn successfully and current balance is ".concat(this.balance));
                }
                else {
                    console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 500 Balance in Your Savings Account');
                }
            }
            else {
                if (this.balance - amount > 1000) {
                    this.balance = this.balance - amount;
                    console.log("Amount withdrawn successfully and current balance is ".concat(this.balance));
                }
                else {
                    console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 1000 Balance in Your Current Account');
                }
            }
        }
    };
    UserAccount.prototype.depositMoney = function () {
        var accountNumber = readlineSync.question("Enter your Account Number: ");
        var amount = readlineSync.question("Enter the Amount you want to Deposit: ");
        accountNumber = accountNumber.toLowerCase();
        if (this.accountNumber == accountNumber) {
            var val1 = +amount;
            var val2 = +this.balance;
            this.balance = val1 + val2;
            console.log("Updated Balance of Account Number ".concat(accountNumber, " is ").concat(this.balance));
            return;
        }
    };
    UserAccount.prototype.validateEmail = function (email) {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;
