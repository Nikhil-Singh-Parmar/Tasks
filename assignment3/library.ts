const readlineSync = require('readline-sync');
class Library{
  private adminName:string[]=[];
  private adminID:string[]=[];
  private userName:string[]=[];
  private userID:string[]=[];
  private bookTitle:string[]=[];
  private bookAuthor:string[]=[];
  private bookID:number[]=[];
  private bookAvailability:number[]=[];
  private issuedBookCount:number[]=[];

  public registerUSer(name:string){
      this.userName.push(name);
      let currentUserID:string;
      currentUserID = "user"+ Math.floor(100000 + Math.random() * 900000);     
      this.userID.push(currentUserID);
      this.issuedBookCount.push(0);
      console.log(`
      User Registered Successfully!
      User Name : ${name}
      User ID : ${currentUserID}
      NOTE : Please use this user ID as your login credentials !!`);
  }

  public registerAdmin(name:string){
    this.adminName.push(name);
    let currentAdminID:string;
    currentAdminID = "admin"+ Math.floor(100000 + Math.random() * 900000);     
    this.adminID.push(currentAdminID);
    console.log(`
    Admin Registered Successfully!
    Admin Name : ${name}
    Admin ID : ${currentAdminID}
    NOTE : Please use this user ID as your login credentials !!`);
}

 public addBook(){
  let id = readlineSync.question(`Enter the ID of the BOOK`);
  let title = readlineSync.question(`Enter the Title of the BOOK`);
  let author = readlineSync.question(`Enter the Name of the Author of the BOOK`);
      this.bookID.push(id);
      this.bookTitle.push(title);
      this.bookAuthor.push(author);
      this.bookAvailability.push(1);
      console.log("Book Successfully Added");
  }

public removeBook(){
  let id = readlineSync.question(`Enter Name the Id of Book which you want to remove`);
  for(let index in this.bookID){
      if(this.bookID[index]==id){
        this.bookID.splice(+index,1);
        this.bookAuthor.splice(+index,1);
        this.bookTitle.splice(+index,1);
        this.bookAvailability.splice(+index,1);
        return;
      }
  }
console.log('No Book with given ID exist in record');
}

public viewAvailableBooks(){
  console.log(`All The Available Books are Listed Below
  ID          Title         Author `);
  for ( let index = 0 ; index < this.bookID.length ; index++){
    if(this.bookAvailability[index]==1){
      console.log(`   ${this.bookID[index]}       ${this.bookTitle[index]}      ${this.bookAuthor[index]}`);      
    }
  }
  
} 

public findIndex( id : number|string , data : (number | string) []):number{
    for(let index = 0; index < data.length ; index++){
      if(id == data[index])return index;
    }
    return -1;
}

public returnBook(){
  let bookID = readlineSync.question(`Enter the ID of Book You want to Return`);
  let userID = readlineSync.question(`Enter User ID for returning Book`);
  let bookIndex = this.findIndex(bookID,this.bookID);
  if(bookIndex==-1){
    console.log('No Book with given Id exist in our records');
    return;
  }
  if(userID==-1){
    console.log('Invalid user ID');
    return;
  }
  let userIndex = this.findIndex(userID,this.userID);
  this.bookAvailability[bookIndex] = 1;
  this.issuedBookCount[userIndex] = this.issuedBookCount[userIndex] - 1;
  console.log(`Book Returned Successfully and Now you have only ${this.issuedBookCount[userIndex]} issued`);
}
public issueBook(){
  let bookID = readlineSync.question(`Enter the ID of Book You want to Issue`);
  let userID = readlineSync.question(`Enter User ID for Issuing Book`);
  let bookIndex = this.findIndex(bookID,this.bookID);
  if(bookIndex==-1){
    console.log("Book with mentioned ID not found in our record please try with different ID");
    return;
  }
  let userIndex = this.findIndex(userID,this.userID);
  if(userIndex==-1){
    console.log('User Account with mentioned credentials are not found please try again with different credentials');
    return;
  }
  if(this.bookAvailability[bookIndex]==0){
    console.log("Book is not available right now please try again later");
    return;
  }
  if(this.issuedBookCount[userIndex]==3){
    console.log("You have already published maximum allowed books please try again after returning some");
    return;
  }
  this.bookAvailability[bookIndex] = 0;
  this.issuedBookCount[userIndex] = this.issuedBookCount[userIndex] + 1;
  console.log(`book issued successfully and now you have total ${this.issuedBookCount[userIndex]} books issued`);

}
public searchBook():void{
  let option = readlineSync.question(`  Enter 1 If you want to Search by Book Title
  Enter 2 If you want to Search by Author of Book`);
  let name = readlineSync.question(`Enter your Search Value Here : `);
  let index : number;
  if(option==1){
    index = this.findIndex(name,this.bookTitle);
  }
  else{
    index = this.findIndex(name,this.bookAuthor);
  }
  if(index==-1){
    console.log("No Book Found with mentioned Details");
  }
  else{
    let availablity : string;
    if(this.bookAvailability[index]==1){
      availablity="Available";
    }
    else{
      availablity="Unavailable";
    }
    console.log(`
    Book ID : ${this.bookID[index]}
    Book Title : ${this.bookTitle[index]}
    Book Author : ${this.bookAuthor[index]}
    Availablity : ${availablity}`);
  }
}
public validateCredentials(id:string,userType:string):boolean{
  if(userType='Admin'){
    if(this.findIndex(id,this.adminID)!=-1)return true;
  }
  if(userType='user'){
    if(this.findIndex(id,this.userID)!=-1)return true;
  } 
  return false;
}
public userLoginService(){
  console.log('inside user login service');
  let inputValue : number = 0;
  while(inputValue!=-1){
    inputValue = readlineSync.question(`
  Enter 1 for Issuing Book
  Enter 2 for Returning Book
  Enter 3 for Viewing all available books
  Enter 4 for Searching Book
  Enter -1 for Exit
  `);
  if(inputValue == 1){
   this.issueBook();
  }
  else if(inputValue == 2){
    this.returnBook();
  }
  else if(inputValue == 3){
    this.viewAvailableBooks();
  }
  else if(inputValue == 4){
    this.searchBook();
  }
  else{
    console.log("Invalid Input");
  }
  } 
}
public adminLoginService(){
  let inputValue : number = 0;
  while(inputValue!=-1){
    inputValue = readlineSync.question(`
  Enter 1 for Adding Book
  Enter 2 for Removing Book
  Enter 3 for Viewing all available books
  Enter 4 for Searching Book
  Enter -1 for Exit
  `);
  if(inputValue == 1){
    this.addBook();
  }
  else if(inputValue == 2){
    this.removeBook();
  }
  else if(inputValue == 3){
    this.viewAvailableBooks();
  }
  else if(inputValue == 4){
    this.searchBook();
  }
  else{
    console.log("Invalid Input");
  }
  }     
}
}
export {Library};