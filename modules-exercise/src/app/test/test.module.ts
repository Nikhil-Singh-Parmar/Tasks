import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './practice/practice.component';
import { SampleModule } from '../sample/sample.module';



@NgModule({
  declarations: [
    PracticeComponent
  ],
  imports: [
    CommonModule,
    SampleModule
  ],
  exports:[
    PracticeComponent
  ]
})
export class TestModule { }
