import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  addEmployee(data: any){
    return this._http.post('http://localhost:3000/employee',data);
  }
  updateEmployee(id:number,data:any){
    return this._http.put(`http://localhost:3000/employee/${id}`,data);
 }
 getAllEmployee():Observable<any>{
   return this._http.get('http://localhost:3000/employee');
 }
 deleteEmployee(id:string):Observable<any>{
   return this._http.delete(`http://localhost:3000/employee/${id}`);
 }
 getSingleEmployee(id:number):Observable<any>{
  return this._http.get(`http://localhost:3000/employee/${id}`);
 }
}
