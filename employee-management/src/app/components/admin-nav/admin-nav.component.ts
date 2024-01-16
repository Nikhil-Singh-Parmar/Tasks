import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
 constructor(private _auth:AuthenticationService,private router : Router){}
 onLogout(){
  this._auth.logout();
  this.router.navigate(['/login']);
 }
}
