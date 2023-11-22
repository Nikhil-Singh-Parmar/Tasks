interface userDetail  {
  id : number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
type allUserDetails = userDetail[];
class fetchAPI {
  public async showAllUserDetails(){
    let data : allUserDetails ;    
    const url = `https://reqres.in/api/users?page=2`;
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error Found, status Code: ${resp.status}`);
      }
       const response = await resp.json();
       data = response.data;
       console.log(data)
    } catch (err) {
      console.error('Error:', err);
      throw err; 
    }
    const userDataContainer = document.getElementById('images')!;
    userDataContainer.innerHTML = '';
    data.forEach((details:userDetail)=> {
      const userCard = document.createElement('div');
      userCard.classList.add('box');
      console.log(details);
      userCard.innerHTML=`<p id='name'>${details.first_name}</p>
      <p id='email'>${details.email}</p>
      <img class='img' src=${details.avatar}>`;
      userDataContainer.appendChild(userCard);
      userCard.addEventListener('click',()=>{
        this.showIndividualUser(details.id);
      });
    })
  }
  
  private async showIndividualUser(id:number) :Promise<void>{
    let userData:any;
    try {
      const resp = await fetch(`https://reqres.in/api/users/${id}`);
      if (!resp.ok) {
        throw new Error(`HTTP error Found, status Code: ${resp.status}`);
      }
      const data = await resp.json();
      userData = data.data;
    } catch (err) {
      console.error('Error:', err);
      throw err; 
    }
    
    const userDataContainer = document.getElementById('images')!;
    const heading = document.getElementsByClassName('heading');
    userDataContainer.innerHTML = '';
        
      const userCard = document.createElement('div');
      userCard.classList.add('box');
      userCard.innerHTML=`<p id='id'>Id : ${id}</p>
      <p id='name'>Full Name : ${userData.first_name} ${userData.last_name}</p>
      <p id='email'>email : ${userData.email}</p>
      <img class='img' src=${userData.avatar}>`;
      userDataContainer.appendChild(userCard);
     
    }
}

const myApi = new fetchAPI();
myApi.showAllUserDetails();



  