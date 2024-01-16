import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'department',
    'contact',
    'due',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _core:CoreService,
    private _employeeService:EmployeeService,
    private router: Router,
    private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this._employeeService.getAllEmployee().subscribe({
      next: (res) =>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    }
    );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEmployee(id:string){
    this.router.navigate(['../addEmployee'], { relativeTo: this.route, queryParams: { id: id } });    
  }
  deleteEmployee(id:string){
    this._employeeService.deleteEmployee(id).subscribe(
      () => {
        this._core.openSnackBar("Employee Deleted","Exit");
        this.getAllEmployee();
      },
      (error) => {
        this._core.openSnackBar("Error occured while deleting","Retry");
      }
    );
  }
}

