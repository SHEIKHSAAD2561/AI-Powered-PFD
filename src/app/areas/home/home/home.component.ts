import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
   constructor(private router: Router) { }

  loginButton()
  {
   this.router.navigate(['/auth-and-authorization']);
  }
  registerUser()
  {
    this.router.navigate(['/register-user']);
  }
}
