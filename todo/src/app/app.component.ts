import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

  public pendingToDo : string[] = [];
  public completedToDo : string[] = [];

  public clickDone = (val:string)=>{
      if(val.length < 1){
        alert("Cannot Add Empty Task in ToDo");
        return;
      }
      this.pendingToDo.push(val);
  }
  public completeToDo = (val:number)=>{
    this.completedToDo.push(this.pendingToDo[val]);
    this.pendingToDo.splice(val,1);
}
  public deletePendingToDo = (index:number) => {
    this.pendingToDo.splice(index,1);
  }
  public deleteCompletedToDo = (index:number) => {
    this.completedToDo.splice(index,1);
  }
}

