const readlineSync = require('readline-sync');
import { UserAccount } from "./bank";

const bank = new UserAccount();

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
    bank.newAccount();
  }
  else if(inputValue==2){
    bank.viewAccountBalance();
  }
  else if(inputValue==3){
    bank.viewUserData();
  }
  else if(inputValue==4){
    bank.withdrawMoney();
  }
  else if(inputValue==5){
    bank.depositMoney();
  }
  else if(inputValue!=6){
    console.log('Invalid Input please select a number between 1 to 6;');
  }
}