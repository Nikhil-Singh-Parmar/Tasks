import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor() { }

  displayMessage():void{
    console.log(`You Executed the display service function of sample module`);
  }
}

