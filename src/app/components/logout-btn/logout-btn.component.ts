import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout-btn',
  imports: [],
  templateUrl: './logout-btn.component.html',
  styleUrl: './logout-btn.component.css'
})
export class LogoutBtnComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
