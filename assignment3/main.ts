const readlineSync = require('readline-sync');
import { Library } from "./library";
const newLibrary = new Library();

let inputValue = 0;
  while(inputValue!=-1){
    inputValue = readlineSync.question(`
  !!!!!!!!!!!!!!!!!   Welcome to Our Library   !!!!!!!!!!!!!!!!!!
  Enter 1 for Registration
  Enter 2 for Login
  Enter -1 to Exit
  `);
  if(inputValue==1){
    let inputValue2 = readlineSync.question(`
  Enter 1 for Admin Registration
  Enter 2 for User Registration
  `);
  if(inputValue2 == 1){
    let name = readlineSync.question(`Enter your Name for registering as Admin`);
    newLibrary.registerAdmin(name);
  }
  else if(inputValue2 == 2){
    let name = readlineSync.question(`Enter your Name for registering as User`);
    newLibrary.registerUSer(name);
  }
  }
  else if(inputValue==2){
    let inputValue2 = readlineSync.question(`
  Enter 1 for Admin Login/Services
  Enter 2 for User Login/Services
  `);
  if(inputValue2 == 1){
    let id = readlineSync.question(`Enter your credentials for logging in as Admin`);
    if(newLibrary.validateCredentials(id.toLowerCase(),"Admin")){
      newLibrary.adminLoginService();
    }
    else{
      console.log("Invalid Login Credentials");
    }
  }
  else if(inputValue2 == 2){
    let id = readlineSync.question(`Enter your credentials for logging in as User`);
    if(newLibrary.validateCredentials(id.toLowerCase(),"user")){
      newLibrary.userLoginService();
    }
    else{
      console.log("Invalid Login Credentials");
    }
  }
  }
  else if(inputValue!=-1){
    console.log('Invalid Input please select a number from 1, 2 and -1');
  }
}
