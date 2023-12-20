import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './components/department/department.component';
import { SoftEngineeringComponent } from './components/soft-engineering/soft-engineering.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTransformationComponent } from './components/data-transformation/data-transformation.component';
import { PassportComponent } from './components/passport/passport.component';

// const appRoute:Routes=[
// ]

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    SoftEngineeringComponent,
    NavbarComponent,
    DataTransformationComponent,
    PassportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
