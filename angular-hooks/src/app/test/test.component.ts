import { AfterViewChecked, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit, AfterViewChecked, DoCheck{
  @Input() name : string = "student name";

  constructor(){
  console.log("inside constructor")
  }

  ngOnChanges():void{
    console.log("Inside onchanges");
  }

  ngOnInit(): void {
    console.log("Inside Oninit");
  }

  ngDoCheck(): void {
    console.log('inside docheck')
  }

  ngAfterContentInit(){
    console.log('Inside After Content Init')
  }

  ngAfterContentChecked(){
    console.log("inside After Content Checked")
  }

  ngAfterViewInit(){
    console.log("inside afterviewinit")
  }

  ngAfterViewChecked(): void {
    console.log('inside afterviewchecked')
  }

  ngOnDestroy():void{
    console.log("Inside ngDestroy")
  }
}
