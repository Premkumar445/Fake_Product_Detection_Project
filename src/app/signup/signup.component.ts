import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Import FormsModule for ngModel
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = { email: this.email, password: this.password };
    this.http.post('http://localhost:5000/signup', userData).subscribe(
      response => {
        console.log("Signup successful", response);
        alert("User registered successfully!");
      },
      error => {
        console.error("Signup error", error);
        alert("Signup failed. Try again.");
      }
    );
  }
}
