const readlineSync = require('readline-sync');
class UserAccount{
    private name:string[]=[];
    private age:number[]=[];
    private location:string[]=[];
    private state:string[]=[];
    private country:string[]=[];
    private email:string[]=[];
    private balance:number[]=[];
    private accountNumber:string[]=[];
    private accountType:string[]=[];
    public registerUSer(name1:string,age1:number,location1:string,state1:string,country1:string,email1:string,balance1:number,type1:string){
        this.name.push(name1);
        this.age.push(age1);
        this.location.push(location1);
        this.state.push(state1);
        this.country.push(country1);
        this.email.push(email1);
        this.balance.push(balance1);
        this.accountType.push(type1);
        let accountNumb:string;
        if(type1=='savings'){
          accountNumb = "sav"+ Math.floor(100000 + Math.random() * 900000);
        }
        else{
          accountNumb="cur"+Math.floor(100000 + Math.random() * 900000);
        }
        this.accountNumber.push(accountNumb);
        console.log(`
        ${type1} Account Created Successfully!
        Account Details:
        Customer Name: ${name1}
        Email ID: ${email1}
        Account Type: ${type1}
        Total Balance: ${balance1}
        Generated Account Number: ${accountNumb}`);
    }
    public fetchBalance(currentAccountNumber:string):number{

        for(let index in this.accountNumber)
        {
            if(this.accountNumber[index]===currentAccountNumber){
                return this.balance[index];
            }
        }
        return -1;
    }
    public viewUserData(currentAccountNumber:string):void{
        for(let index in this.accountNumber){
            if(this.accountNumber[index]==currentAccountNumber){
                console.log(`
        Account Holder Details:
        Customer Name: ${this.name[index]}
        Location: ${this.location[index]} 
        Country: ${this.country[index]}
        Email ID: ${this.email[index]}
        Account Type: ${this.accountType[index]}
        Total Balance: ${this.balance[index]}
        Account Number: ${currentAccountNumber}`);
        return;
            }
        }
    }
    public withdrawMoney(currentAccountNumber:string,amount:number):void{
        for(let index in this.accountNumber){
            if(this.accountNumber[index]==currentAccountNumber){
                if(this.accountType[index]=="savings"){
                    if(this.balance[index]-amount > 500){
                        this.balance[index] = this.balance[index] - amount;
                        console.log(`Amount withdrawn successfully and current balance is ${this.balance[index]}`);
                    }
                    else{
                        console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 500 Balance in Your Savings Account')
                    }
                }
                else{
                    if(this.balance[index]-amount > 1000){
                        this.balance[index] = this.balance[index] - amount;
                        console.log(`Amount withdrawn successfully and current balance is ${this.balance[index]}`);
                    }
                    else{
                        console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 1000 Balance in Your Current Account')
                    }
                }
            }
        }
    }
    public depositMoney(currentAccountNumber:string,amount:number):void{
        for(let index in this.accountNumber){
            if(this.accountNumber[index]==currentAccountNumber){
                let val1:number=+amount;
                let val2:number=+this.balance[index];
                this.balance[index]=val1+val2;
                console.log(`Updated Balance of Account Number ${currentAccountNumber} is ${this.balance[index]}`);
                return ;
            }
        }
    }
}
const validateEmail = (email:string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const bank = new UserAccount();
function newAccount(){
  let value = readlineSync.question(`1. Savings
2. Current
Select 1 or 2`);
  let accountType:string;
  if(value==1){
    accountType='savings';
  }
  else {
    accountType='current';
  }
  console.log(`Creating a ${accountType} Account`);
  let name = readlineSync.question('Enter Your Name: ');
  let age = readlineSync.question('Enter Your Age: ');
  while(age<18 || age>68){
    console.log('Age must be between 18 to 68 years');
    age = readlineSync.question('Enter Your Age: ');
  }
  let location = readlineSync.question('Enter Your Location: ');
  let state = readlineSync.question('Enter Your State: ');
  let country = readlineSync.question('Enter Your Country: ');
  let balance = readlineSync.question(`Enter Initial balance for your ${accountType}: Account: `);
  let email = readlineSync.question('Enter Your Email ID: ');
  if(!validateEmail(email)){
    console.log(`Email ID is not in standard formart
    NOTE : One more wrong attempt and your account registration will be cancelled`);
    email = readlineSync.question('Re-enter Your Email ID: ');
    if(!validateEmail(email))return;
      
  }
  bank.registerUSer(name,age,location,state,country,email,balance,accountType);
    
}
function viewBalance(){
  let accountNumber = readlineSync.question(`Enter your Account Number: `);
  let accountBalance = bank.fetchBalance(accountNumber);
  if(accountBalance==0)console.log('Bank Account Not Found Please try again with different Bank Account: ');
  else{
    console.log(`Account Balance for account number ${accountNumber} is ${accountBalance}`);
  }
}
function viewData(){
  let accountNumber = readlineSync.question(`Enter your Account Number: `);
  bank.viewUserData(accountNumber);
}
function withdraw(){
  let accountNumber = readlineSync.question(`Enter your Account Number: `);
  let amount = readlineSync.question(`Enter the Amount you want to withdraw: `);
  bank.withdrawMoney(accountNumber,amount);
}
function deposit(){
  let accountNumber = readlineSync.question(`Enter your Account Number: `);
  let amount = readlineSync.question(`Enter the Amount you want to Deposit: `);
  bank.depositMoney(accountNumber,amount);
}
let inputValue = 0;
  while(inputValue!=6){
    inputValue = readlineSync.question(`Enter your option: Welcome to Our Bank Application
  1. Open Savings or Current Account
  2. View Balance
  3. View Customer Data
  4. Withdraw Money
  5. Deposit Money
  6. Exit from Application
  `);
  if(inputValue==1){
    newAccount();
  }
  else if(inputValue==2){
    viewBalance();
  }
  else if(inputValue==3){
    viewData();
  }
  else if(inputValue==4){
    withdraw();
  }
  else if(inputValue==5){
    deposit();
  }
  else if(inputValue!=6){
    console.log('Invalid Input please select a number between 1 to 6;');
  }
}



