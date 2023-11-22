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
    UserAccount.prototype.viewAccountBalance = function (currentAccountNumber) {
        if (this.accountNumber === currentAccountNumber) {
            return this.balance;
        }
        return -1;
    };
    UserAccount.prototype.viewUserData = function (currentAccountNumber) {
        var accountType;
        if (currentAccountNumber[0] == 'S' || currentAccountNumber[0] == 's') {
            accountType = "Savings";
        }
        else {
            accountType = "Current";
        }
        if (this.accountNumber == currentAccountNumber) {
            console.log("\n        Account Holder Details:\n        Customer Name: ".concat(this.name, "\n        Location: ").concat(this.location, " \n        Country: ").concat(this.country, "\n        Email ID: ").concat(this.email, "\n        Account Type: ").concat(accountType, "\n        Total Balance: ").concat(this.balance, "\n        Account Number: ").concat(currentAccountNumber));
            return;
        }
    };
    UserAccount.prototype.withdrawMoney = function (currentAccountNumber, amount) {
        if (this.accountNumber == currentAccountNumber) {
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
    UserAccount.prototype.depositMoney = function (currentAccountNumber, amount) {
        if (this.accountNumber == currentAccountNumber) {
            var val1 = +amount;
            var val2 = +this.balance;
            this.balance = val1 + val2;
            console.log("Updated Balance of Account Number ".concat(currentAccountNumber, " is ").concat(this.balance));
            return;
        }
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;
