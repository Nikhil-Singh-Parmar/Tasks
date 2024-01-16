import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent  implements OnInit {

  userId: string="";
  userData: any;
  isEditingEmail: boolean = false;
  editedEmail: string="";
  isEditingMobile: boolean = false;
  editedMobileNumber: string="";
  employeeId: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private auth:AuthenticationService,
    private router:Router,
    private _employee :EmployeeService
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.userId = params['id'];
    if (this.userId) {
      this.getUserInfo();
    }
  });
  }
  getUserInfo(): void {
    this._employee.getSingleEmployee(+this.userId).subscribe(data => {
      this.userData = data;
      this.editedEmail = this.userData.email;
      this.editedMobileNumber = this.userData.contact;
    });
  }
  
  editEmail(): void {
    this.isEditingEmail = true;
  }

  saveEmail(): void {
    this._employee.updateEmployee(+this.userId, { 
      contact:this.userData.contact,
      email: this.editedEmail,
      name:this.userData.name,
      department : this.userData.department,
      status : this.userData.status,
      due : this.userData.due
     })
      .subscribe(() => {
        this.isEditingEmail = false;
        this.getUserInfo(); 
      });
  }

  editMobileNumber(): void {
    this.isEditingMobile = true;
  }

  saveMobileNumber(): void {
    this._employee.updateEmployee(+this.userId,  { 
      contact:this.editedMobileNumber,
      email: this.userData.email,
      name:this.userData.name,
      department : this.userData.department,
      status : this.userData.status,
      due : this.userData.due
     })
      .subscribe(() => {
        this.isEditingMobile = false;
        this.getUserInfo();
      });
  }
  onLogout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
