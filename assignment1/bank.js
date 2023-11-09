var readlineSync = require('readline-sync');
var UserAccount = /** @class */ (function () {
    function UserAccount() {
        this.name = [];
        this.age = [];
        this.location = [];
        this.state = [];
        this.country = [];
        this.email = [];
        this.balance = [];
        this.accountNumber = [];
        this.accountType = [];
    }
    UserAccount.prototype.registerUSer = function (name1, age1, location1, state1, country1, email1, balance1, type1) {
        this.name.push(name1);
        this.age.push(age1);
        this.location.push(location1);
        this.state.push(state1);
        this.country.push(country1);
        this.email.push(email1);
        this.balance.push(balance1);
        this.accountType.push(type1);
        var accountNumb;
        if (type1 == 'savings') {
            accountNumb = "sav" + Math.floor(100000 + Math.random() * 900000);
        }
        else {
            accountNumb = "cur" + Math.floor(100000 + Math.random() * 900000);
        }
        this.accountNumber.push(accountNumb);
        console.log("\n        ".concat(type1, " Account Created Successfully!\n        Account Details:\n        Customer Name: ").concat(name1, "\n        Email ID: ").concat(email1, "\n        Account Type: ").concat(type1, "\n        Total Balance: ").concat(balance1, "\n        Generated Account Number: ").concat(accountNumb));
    };
    UserAccount.prototype.fetchBalance = function (currentAccountNumber) {
        for (var index in this.accountNumber) {
            if (this.accountNumber[index] === currentAccountNumber) {
                return this.balance[index];
            }
        }
        return -1;
    };
    UserAccount.prototype.viewUserData = function (currentAccountNumber) {
        for (var index in this.accountNumber) {
            if (this.accountNumber[index] == currentAccountNumber) {
                console.log("\n        Account Holder Details:\n        Customer Name: ".concat(this.name[index], "\n        Location: ").concat(this.location[index], " \n        Country: ").concat(this.country[index], "\n        Email ID: ").concat(this.email[index], "\n        Account Type: ").concat(this.accountType[index], "\n        Total Balance: ").concat(this.balance[index], "\n        Account Number: ").concat(currentAccountNumber));
                return;
            }
        }
    };
    UserAccount.prototype.withdrawMoney = function (currentAccountNumber, amount) {
        for (var index in this.accountNumber) {
            if (this.accountNumber[index] == currentAccountNumber) {
                if (this.accountType[index] == "savings") {
                    if (this.balance[index] - amount > 500) {
                        this.balance[index] = this.balance[index] - amount;
                        console.log("Amount withdrawn successfully and current balance is ".concat(this.balance[index]));
                    }
                    else {
                        console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 500 Balance in Your Savings Account');
                    }
                }
                else {
                    if (this.balance[index] - amount > 1000) {
                        this.balance[index] = this.balance[index] - amount;
                        console.log("Amount withdrawn successfully and current balance is ".concat(this.balance[index]));
                    }
                    else {
                        console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 1000 Balance in Your Current Account');
                    }
                }
            }
        }
    };
    UserAccount.prototype.depositMoney = function (currentAccountNumber, amount) {
        for (var index in this.accountNumber) {
            if (this.accountNumber[index] == currentAccountNumber) {
                var val1 = +amount;
                var val2 = +this.balance[index];
                this.balance[index] = val1 + val2;
                console.log("Updated Balance of Account Number ".concat(currentAccountNumber, " is ").concat(this.balance[index]));
                return;
            }
        }
    };
    return UserAccount;
}());
var validateEmail = function (email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
var bank = new UserAccount();
function newAccount() {
    var value = readlineSync.question("1. Savings\n2. Current\nSelect 1 or 2");
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
        console.log("Email ID is not in standard formart\n    NOTE : One more wrong attempt and your account registration will be cancelled");
        email = readlineSync.question('Re-enter Your Email ID: ');
        if (!validateEmail(email))
            return;
    }
    bank.registerUSer(name, age, location, state, country, email, balance, accountType);
}
function viewBalance() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    var accountBalance = bank.fetchBalance(accountNumber);
    if (accountBalance == 0)
        console.log('Bank Account Not Found Please try again with different Bank Account: ');
    else {
        console.log("Account Balance for account number ".concat(accountNumber, " is ").concat(accountBalance));
    }
}
function viewData() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    bank.viewUserData(accountNumber);
}
function withdraw() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    var amount = readlineSync.question("Enter the Amount you want to withdraw: ");
    bank.withdrawMoney(accountNumber, amount);
}
function deposit() {
    var accountNumber = readlineSync.question("Enter your Account Number: ");
    var amount = readlineSync.question("Enter the Amount you want to Deposit: ");
    bank.depositMoney(accountNumber, amount);
}
var inputValue = 0;
while (inputValue != 6) {
    inputValue = readlineSync.question("Enter your option: Welcome to Our Bank Application\n  1. Open Savings or Current Account\n  2. View Balance\n  3. View Customer Data\n  4. Withdraw Money\n  5. Deposit Money\n  6. Exit from Application\n  ");
    if (inputValue == 1) {
        newAccount();
    }
    else if (inputValue == 2) {
        viewBalance();
    }
    else if (inputValue == 3) {
        viewData();
    }
    else if (inputValue == 4) {
        withdraw();
    }
    else if (inputValue == 5) {
        deposit();
    }
    else if (inputValue != 6) {
        console.log('Invalid Input please select a number between 1 to 6;');
    }
}
