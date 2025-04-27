import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  userName: string = '';
  @Input() isSidebarOpen = false;

  ngOnInit() {
    const user = this.authService.getLoggedInUser();
    if (user) {
      this.userName = user.name;
    }
  }

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  logout() {
    alert('Logout successfully...!');
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
