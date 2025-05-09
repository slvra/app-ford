import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() title: string = '';
  @Input() BtnText: string = '';
  @Input() disableBtn: boolean = true;
  @Output("submits") onSubmits = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter<void>();

  submits() {
    this.onSubmits.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }

  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;
    if (this.authService.login(username, password)) {
      this.router.navigate(['/home']);
    } else {
      this.loginError = 'Usuário ou senha inválidos.';
    }
  }
}