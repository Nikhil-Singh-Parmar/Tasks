// const url = 'https://reqres.in/api/users?page=2';
// function print(data):void{
//   console.log(data);
// }
// function help1():void{
//   fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); 
//   })
//   .then(data => {
//     print(data.data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }
// help1();
type userDetail = {
  id : number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
type allUserDetails = userDetail[];
class userAPI {
  private baseUrl: string = 'https://reqres.in/api/users?page=2';

  private showIndividualUser(url:string,name:string,email:string,id:number):void{
  const modal = document.querySelector(".modal")!;
  const modalImg = document.querySelector<HTMLImageElement>(".modalImg")!;
  const userName = document.querySelector(".userName")!;
  const userEmail = document.querySelector(".userEmail")!;
  const userID = document.querySelector(".userID")!;
  const close1 = document.querySelector(".close")!;
      modalImg.src = url;
      userName.innerHTML = `Full Name : ${name}`;
      userEmail.innerHTML = `email : ${email}`;
      userID.innerHTML = `ID : ${id}`;
      modal.classList.add("appear");
      close1.addEventListener("click", () => {
        modal.classList.remove("appear");
      });

  }
  public printUsers(user:allUserDetails){
    const userDataContainer = document.getElementById('images')!;
    userDataContainer.innerHTML = '';
    user.forEach((details:userDetail)=> {
      const userCard = document.createElement('div');
      userCard.classList.add('box');
      console.log(details);
      userCard.innerHTML=`<p id='name'>${details.first_name}</p>
      <p id='email'>${details.email}</p>
      <img class='img' src=${details.avatar}>`;
      userDataContainer.appendChild(userCard);
      userCard.addEventListener('click',()=>{
        this.showIndividualUser(details.avatar,details.first_name +' '+ details.last_name,details.email,details.id);
      });
    })
  }
  public async getData() {
    const url = `${this.baseUrl}/data`;
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error Found, status Code: ${resp.status}`);
      }
      const data = await resp.json();
      return data;
    } catch (err) {
      console.error('Error:', err);
      throw err; 
    }
  }
}


const myApi = new userAPI();
myApi.getData()
  .then(data => {
    myApi.printUsers(data.data);
  })
  .catch(err => {
    console.error('Error:', err);
  });


  