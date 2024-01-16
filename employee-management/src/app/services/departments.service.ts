import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor(private _http: HttpClient) { }
  addDepartment(data: any){
    return this._http.post('http://localhost:3000/department',data);
  }
  updateDepartment(id:number,data:any){
    return this._http.put(`http://localhost:3000/department/${id}`,data);
 }
 getAllDepartment():Observable<any>{
   return this._http.get('http://localhost:3000/department');
 }
 deleteDepartment(id:number){
   return this._http.delete(`http://localhost:3000/department/${id}`);
 }
 getSingleDepartment(id:number):Observable<any>{
  return this._http.get(`http://localhost:3000/department/${id}`);
 }
}
