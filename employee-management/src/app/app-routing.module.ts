import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AuthGuard } from './auth.guard';

const adminRoutes: Routes = [
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'departments', component: DepartmentListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'addDepartment', component: AddDepartmentComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];

const  routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'detail', component: EmployeeDetailsComponent, canActivate: [AuthGuard], data: { role: 'employee' } },
  {
    path: 'home',
    component: AdminNavComponent,
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: adminRoutes
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
