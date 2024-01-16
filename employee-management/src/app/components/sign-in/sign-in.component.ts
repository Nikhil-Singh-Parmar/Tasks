import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
     private authService: AuthenticationService,
     private router: Router,
     private _core: CoreService
     ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['employee'] 
    });
  }


  login(): void {
    const { username, password, role } = this.loginForm.value; 
    this.authService.login(username, password,role).subscribe(
      userId => {
        if (userId !== -1) {
          if (this.authService.getRole() === 'employee') {
            this._core.openSnackBar("Logged In as Employee","OK");
            this.router.navigate(['/detail'], { queryParams: { id: userId } });
          } else if (this.authService.getRole() === 'admin') {
            this._core.openSnackBar("Logged In as Admin","Ok");
            this.router.navigate(['/home']);
          }
        } else {

          this._core.openSnackBar("Authentication Failed !! Please Try Again with different credentials ","OK");
        }
      }
    );
  }
}
