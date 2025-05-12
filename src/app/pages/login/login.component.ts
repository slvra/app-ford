import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) return;

    const { nome, senha } = this.loginForm.value;

    this.http.post<any>('http://localhost:3001/login', { nome, senha }).subscribe({
      next: (res) => {
        // Aqui você pode salvar os dados em localStorage e redirecionar
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erro ao tentar fazer login';
      },
    });
  }
}


// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { AuthService } from '../../auth.service';
// import { Router } from '@angular/router';
// import { SidebarComponent } from '../../components/sidebar/sidebar.component';
// import { InputComponent } from '../../components/input/input.component';



// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [SidebarComponent, CommonModule, RouterModule, InputComponent],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {

// constructor(private router: Router) {}
// login() {
// // lógica de validação
// this.router.navigate(['/home']);
// }

// ngOnInit() {
//   this.loginForm = this.fb.group({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)])
//   });
  

