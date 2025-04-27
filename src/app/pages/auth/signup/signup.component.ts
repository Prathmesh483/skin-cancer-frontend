import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  name: string;
  email: string;
  password: string;
  phone: string;
  age: string;
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  // Signup function
  async onSignup() {
    try {
      const userCredential = await this.authService.signup(
        this.name,
        this.email,
        this.password,
        this.phone,
        this.age
      );
      console.log('User signed up successfully:', userCredential);
      // Navigate to login page after successful signup
      this.router.navigate(['/login']);
    } catch (error) {
      this.error = error.message;
      console.log('Signup failed:', error);
    }
  }

}
