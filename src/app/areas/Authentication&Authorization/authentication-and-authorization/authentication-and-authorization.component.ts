import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-and-authorization',
  templateUrl: './authentication-and-authorization.component.html',
  styleUrls: ['./authentication-and-authorization.component.css']
})
export class AuthenticationAndAuthorizationComponent {
 showPassword:boolean=false;
constructor(private router: Router) { }  
  registerUser()
  {
    this.router.navigate(['/register-user']);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Login form submitted:', form.value);
      // Here you would call your authentication service
    } else {
      console.log('Login form is invalid.');
      // The button is already disabled, so this is just a fallback
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
