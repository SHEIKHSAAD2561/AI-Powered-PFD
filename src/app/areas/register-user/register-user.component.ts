import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
 showPassword:boolean=false;

  constructor() { }

  onSubmit(form: NgForm) {
    // Check if the form is valid before processing
    debugger;
    if (form.valid) {
      // Check if passwords match
      const password = form.value.password;
      const confirmPassword = form.value.confirmPassword;

      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return; // Stop the submission
      }

      console.log('Form is valid and passwords match:', form.value);
      // Here you can send the data to your backend API
      // e.g., this.authService.register(form.value).subscribe(...);

    } else {
      console.log('Form is invalid. Please correct the errors.');
      alert('Please fill out all required fields correctly.');
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
