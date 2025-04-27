import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth:AuthService, private router: Router, private loginService: LoginService) {}

  onLogin() {
    this.auth
      .login(this.email, this.password)
      .then(() => {
        alert("Login successfully");
        this.loginService.login('dummy-token');
        this.router.navigate(['/about']);
      })
      .catch((err) => (this.error = err.message));
  }
}
