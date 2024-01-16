import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn : boolean = false;
  private role: string="";
  private userId : number =0;

  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  constructor(private http: HttpClient, private router: Router) {}
  login(username: string, password: string, role: string): Observable<number> {
    return this.http.get<any>(`http://localhost:3000/users?username=${username}&password=${password}&role=${role}`).pipe(
      map(users => {
        if (users.length > 0) {
          this.loggedIn = true;
          this.role = users[0].role;
          this.userId = users[0].id;
          return this.userId;
        } else {
          return -1;
        }
      })
    );
  }

  getRole(): string {
    return this.role;
  }
  
  logout(): void {
    this.loggedIn = false ;
  }
}
