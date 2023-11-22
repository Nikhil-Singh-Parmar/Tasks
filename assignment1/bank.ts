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
    public viewAccountBalance(currentAccountNumber:string):number{
            if(this.accountNumber===currentAccountNumber){
                return this.balance;
            }        
        return -1;
    }
    public viewUserData(currentAccountNumber:string):void{
        let accountType:string;
        if(currentAccountNumber[0]=='S' || currentAccountNumber[0]=='s'){
          accountType="Savings"
        }
        else{
          accountType="Current"
        }
            if(this.accountNumber==currentAccountNumber){
                console.log(`
        Account Holder Details:
        Customer Name: ${this.name}
        Location: ${this.location} 
        Country: ${this.country}
        Email ID: ${this.email}
        Account Type: ${accountType}
        Total Balance: ${this.balance}
        Account Number: ${currentAccountNumber}`);
        return;
            }
        
    }
    public withdrawMoney(currentAccountNumber:string,amount:number):void{
  
            if(this.accountNumber==currentAccountNumber){
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
    public depositMoney(currentAccountNumber:string,amount:number):void{
        
            if(this.accountNumber==currentAccountNumber){
                let val1:number=+amount;
                let val2:number=+this.balance;
                this.balance=val1+val2;
                console.log(`Updated Balance of Account Number ${currentAccountNumber} is ${this.balance}`);
                return ;
            }
        
    }
}
 
export {UserAccount};  





