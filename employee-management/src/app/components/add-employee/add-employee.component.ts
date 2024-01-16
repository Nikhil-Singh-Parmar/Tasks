import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  employeeForm : FormGroup;
  editMode = false;
  employeeId: number=1;

  constructor(
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private _employeeService: EmployeeService,
    private router: Router,
    private _core: CoreService
    )
     {
    this.employeeForm = this._fb.group({
      name:['', Validators.required],
      status:['', Validators.required],
      department : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      due: [null, [Validators.required, this.validateDate]],
    })
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.employeeId = params['id'];
      if (this.employeeId) {
        this.editMode = true;
        this.loadEmployeeData();
      }
    });
  }

  loadEmployeeData(): void {
    this._employeeService.getSingleEmployee(this.employeeId).subscribe((data: any) => {
      this.employeeForm.setValue({
        name: data.name,
        email: data.email,
        status: data.status,
        contact: data.contact,
        department: data.department,
        due:data.due,
      });
    });
  }
  validateDate(control: AbstractControl): ValidationErrors | null {
    const selectedDate = control.value;
    const currentDate = new Date();
    if (selectedDate && selectedDate >= currentDate) {
      alert("Joining date should be older than or equal to today's date");
      return { futureDate: true };
    }
    return null;
  }
  onFormSubmit(){
    if (this.editMode) {
      this.editEmployee();
    } else {
      this.addEmployee();
    }
  }
  addEmployee(){
   if(this.employeeForm.valid){
    this._employeeService.addEmployee(this.employeeForm.value).subscribe({
      next: (val:any)=>{
        this._core.openSnackBar("Employee added Successfully","OK");
        this.router.navigate(['../employees'], { relativeTo: this.route });
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
   }
   else{
    this._core.openSnackBar("Please provide valid details","OK");
   }
  }

  editEmployee(){
   if(this.employeeForm.valid){
    this._employeeService.updateEmployee(this.employeeId,this.employeeForm.value).subscribe({
      next: (val:any)=>{
        this._core.openSnackBar("Employee Details Updated !!","OK");
        this.router.navigate(['../employees'], { relativeTo: this.route });
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
   }
   else{
    this._core.openSnackBar("Please provide valid details","OK");
   }
  }
  onCancel(){
    this.router.navigate(['../employees'], { relativeTo: this.route });
  }
}
