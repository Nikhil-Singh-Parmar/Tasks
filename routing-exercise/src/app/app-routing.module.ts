import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { SoftEngineeringComponent } from './components/soft-engineering/soft-engineering.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTransformationComponent } from './components/data-transformation/data-transformation.component';
import { PassportComponent } from './components/passport/passport.component';

const routes: Routes = [
  {path:'',component:NavbarComponent},
  {path:'department',children:[
    {path:'',component:DepartmentComponent},
    {path:'technology',children:[
      {path:'',component:SoftEngineeringComponent},
      {path:'data-tranformation',component:DataTransformationComponent},
      {path:'passport',component:PassportComponent}
    ]}
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
