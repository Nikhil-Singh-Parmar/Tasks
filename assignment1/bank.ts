const readlineSync = require('readline-sync');
class UserAccount{
    private name:string;
    private age:number;
    private location:string;
    private state:string;
    private country:string;
    private email:string;
    private balance:number;
    private accountNumber:string;

    public registerUSer(name1:string,age1:number,location1:string,state1:string,country1:string,email1:string,balance1:number,type1:string){
        this.name = name1;
        this.age = age1 ;
        this.location = location1 ;
        this.state = state1 ;
        this.country = country1 ;
        this.email = email1 ;
        this.balance = balance1 ;
        let accountNumb:string;
        if(type1=='savings'){
          accountNumb = "sav"+ Math.floor(100000 + Math.random() * 900000);
        }
        else{
          accountNumb="cur"+Math.floor(100000 + Math.random() * 900000);
        }
        this.accountNumber = accountNumb;
        console.log(`
        ${type1} Account Created Successfully!
        Account Details:
        Customer Name: ${name1}
        Email ID: ${email1}
        Account Type: ${type1}
        Total Balance: ${balance1}
        Generated Account Number: ${accountNumb}`);
    }

    public newAccount():void{
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
        if(!this.validateEmail(email)){
          console.log(`Email ID is not in standard formart
          NOTE : One more wrong attempt and your account registration will be cancelled`);
          email = readlineSync.question('Re-enter Your Email ID: ');
          if(!this.validateEmail(email))return;
            
        }
        this.registerUSer(name,age,location,state,country,email,balance,accountType);
          
      }

    public viewAccountBalance():void{
        let accountNumber = readlineSync.question(`Enter your Account Number: `);
            if(this.accountNumber===accountNumber.toLowerCase()){        
              console.log(`Account Balance for account number ${accountNumber} is ${this.balance}`);
              return;
            }        
            console.log('Bank Account Not Found Please try again with different Bank Account: ');
    }
    public viewUserData():void{
        let accountNumber = readlineSync.question(`Enter your Account Number: `);
        accountNumber = accountNumber.toLowerCase();
        let accountType:string;
        if(accountNumber[0]=='s'){
          accountType="Savings"
        }
        else{
          accountType="Current"
        }
            if(this.accountNumber==accountNumber){
                console.log(`
        Account Holder Details:
        Customer Name: ${this.name}
        Location: ${this.location} 
        Country: ${this.country}
        Email ID: ${this.email}
        Account Type: ${accountType}
        Total Balance: ${this.balance}
        Account Number: ${accountNumber}`);
        return;
            }
        
    }
    public withdrawMoney():void{
        let accountNumber = readlineSync.question(`Enter your Account Number: `);
        let amount = readlineSync.question(`Enter the Amount you want to withdraw: `);
        accountNumber = accountNumber.toLowerCase();
            if(this.accountNumber==accountNumber){
                if(this.accountNumber[0]=="s"
                ){
                    if(this.balance-amount > 500){
                        this.balance = this.balance - amount;
                        console.log(`Amount withdrawn successfully and current balance is ${this.balance}`);
                    }
                    else{
                        console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 500 Balance in Your Savings Account')
                    }
                }
                else{
                    if(this.balance-amount > 1000){
                        this.balance = this.balance - amount;
                        console.log(`Amount withdrawn successfully and current balance is ${this.balance}`);
                    }
                    else{
                        console.log('Unable to withdraw due to insufficient funds, you have to maintain minimum Rs 1000 Balance in Your Current Account')
                    }
                }
            }
        
    }
    public depositMoney():void{     
        let accountNumber = readlineSync.question(`Enter your Account Number: `);
        let amount = readlineSync.question(`Enter the Amount you want to Deposit: `);
        accountNumber = accountNumber.toLowerCase();
            if(this.accountNumber==accountNumber){
                let val1:number=+amount;
                let val2:number=+this.balance;
                this.balance=val1+val2;
                console.log(`Updated Balance of Account Number ${accountNumber} is ${this.balance}`);
                return ;
            }
        
    }

    private validateEmail (email:string) {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      }
}
 
export {UserAccount};  





