import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { InputComponent } from '../../components/input/input.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  disableBtn = false;
  BtnText = 'Entrar';
  errorMessage: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

submits(): void {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.disableBtn = true;
  this.BtnText = 'Entrando...';

  const credentials = this.loginForm.value;

  this.authService.login(credentials).subscribe({
    next: (response) => {
      console.log('Login bem-sucedido:', response);

      localStorage.setItem('user', JSON.stringify(response));
      // this.router.navigate(['/dashboard']); // Se quiser redirecionar
    },
    error: (err: { error: { message: string; }; }) => {
      console.error('Erro ao fazer login:', err);
      this.errorMessage = err.error?.message || 'Erro desconhecido';
      this.disableBtn = false;
      this.BtnText = 'Entrar';
    }
  });
}
}