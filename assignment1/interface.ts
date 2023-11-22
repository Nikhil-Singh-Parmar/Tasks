const readlineSync = require('readline-sync');
import { UserAccount } from "./bank";
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


  const validateEmail = (email:string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }


  function viewBalance(){
    let accountNumber = readlineSync.question(`Enter your Account Number: `);
    let accountBalance = bank.viewAccountBalance(accountNumber.toLowerCase());
    if(accountBalance==0)console.log('Bank Account Not Found Please try again with different Bank Account: ');
    else{
      console.log(`Account Balance for account number ${accountNumber} is ${accountBalance}`);
    }
  }


  function viewData(){
    let accountNumber = readlineSync.question(`Enter your Account Number: `);
    bank.viewUserData(accountNumber.toLowerCase());
  }


  function withdraw(){
    let accountNumber = readlineSync.question(`Enter your Account Number: `);
    let amount = readlineSync.question(`Enter the Amount you want to withdraw: `);
    bank.withdrawMoney(accountNumber.toLowerCase(),amount);
  }


  function deposit(){
    let accountNumber = readlineSync.question(`Enter your Account Number: `);
    let amount = readlineSync.question(`Enter the Amount you want to Deposit: `);
    bank.depositMoney(accountNumber.toLowerCase(),amount);
  }

  export{deposit,withdraw,viewBalance,viewData,newAccount};