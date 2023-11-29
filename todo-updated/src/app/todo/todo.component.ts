import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  public pendingToDo : string[] = [];
  public completedToDo : string[] = [];

  private validateTaskString(taskDetail:string){
      if(taskDetail && !taskDetail.trim()){
        return false;
      }
      else if(/[0-9]/.test(taskDetail)){
        return false;
      }
      return true;
  }
  public addTask = (taskDetail:string)=>{
      if(taskDetail.length > 0){
        if(this.validateTaskString(taskDetail)){
          this.pendingToDo.push(taskDetail);
          return ;
        }
      }
      alert('Invalid Input !! Try again with different Task Detail !!');
  }
  public completeToDo = (index:number)=>{
    this.completedToDo.push(this.pendingToDo[index]);
    this.pendingToDo.splice(index,1);
}
  public deletePendingToDo = (index:number) => {
    this.pendingToDo.splice(index,1);
  }
  public deleteCompletedToDo = (index:number) => {
    this.completedToDo.splice(index,1);
  }
}
