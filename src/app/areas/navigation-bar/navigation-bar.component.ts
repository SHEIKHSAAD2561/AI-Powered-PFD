import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  constructor(private router: Router) { }
  registerUser() {
    this.router.navigate(['/register-user']);
  }
   loginButton()
  {
   this.router.navigate(['/auth-and-authorization']);
  }
}
