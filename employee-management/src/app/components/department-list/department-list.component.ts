import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DepartmentsService } from '../../services/departments.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'males',
    'females',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _departmentService:DepartmentsService,
    private router:Router,
     private route:ActivatedRoute,
     private _core: CoreService) {}

  ngOnInit(): void {
    this.getAllDepartments();
  }

  getAllDepartments(){
    this._departmentService.getAllDepartment().subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    }
    );
  }

  editDepartment(id:string){
    this.router.navigate(['../addDepartment'], { relativeTo: this.route, queryParams: { id: id } });    
  }
  deleteDepartment(id:string){
    this._departmentService.deleteDepartment(+id).subscribe(
      () => {
        this._core.openSnackBar("Department Deleted Successfully","Exit");
        this.getAllDepartments();
      },
      (error) => {
        this._core.openSnackBar("Error occured in deletion","Retry");
      }
    );
  }
}
