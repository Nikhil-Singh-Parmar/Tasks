import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DepartmentsService } from '../../services/departments.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  departmentForm : FormGroup;
  editMode = false;
  departmentId: number=1;

  constructor(
    private _fb: FormBuilder,
    private _departmentService: DepartmentsService,
    private router: Router,
    private http: HttpClient, 
    private route: ActivatedRoute,
    private _core:CoreService
    )
     {
    this.departmentForm = this._fb.group({
      name:['', Validators.required],
      description:['', Validators.required],
      males: [0, [Validators.required, Validators.min(0)]],
      females: [0, [Validators.required, Validators.min(0)]],
    })
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.departmentId = params['id'];
      if (this.departmentId) {
        this.editMode = true;
        this.loadDepartmentData();
      }
    });
  }

  loadDepartmentData(){
    this._departmentService.getSingleDepartment(this.departmentId).subscribe((data: any) => {
      this.departmentForm.setValue({
        name: data.name,
        description: data.description,
        males: data.males,
        females: data.females,
      });
    });
  
  }

  onFormSubmit(){
    if (this.editMode) {
      this.editDepartment();
    } else {
      this.addDepartment();
    }
  }

  addDepartment():void{
    if(this.departmentForm.valid){
    this._departmentService.addDepartment(this.departmentForm.value).subscribe({
      next:(val:any)=>{
        this._core.openSnackBar("Department Added Successfully","Done");
        this.router.navigate(['../departments'], { relativeTo: this.route });
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
    }
    else{
      this._core.openSnackBar("Please provide valid details","Exit");
    }
  }

  editDepartment(){
    if(this.departmentForm.valid){
     this._departmentService.updateDepartment(this.departmentId,this.departmentForm.value).subscribe({
       next: (val:any)=>{
        this._core.openSnackBar("Department Details Successfully Updated","Done");
         this.router.navigate(['../departments'], { relativeTo: this.route });
       },
       error: (err:any)=>{
         console.log(err);
       }
     })
    }
    else{
      this._core.openSnackBar("Please provide valid details","Exit");
    }
   }

  onCancel(){
    this.router.navigate(['../departments'], { relativeTo: this.route });
  }


}
