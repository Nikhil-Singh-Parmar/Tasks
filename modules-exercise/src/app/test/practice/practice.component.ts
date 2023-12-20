import { Component } from '@angular/core';
import { DisplayService } from '../../sample/display.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css'
})
export class PracticeComponent {
  constructor(private displayService: DisplayService) {}
  onclick(){
    console.log("You are inside practice component of test module")
    this.displayService.displayMessage();
  }
}
