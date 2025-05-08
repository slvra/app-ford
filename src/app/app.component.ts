import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-ford';
  menuLinks = [
    { label: 'home', route: '/home' },
    { label: 'dashboard', route: '/dashboard' },
    { label: 'login', route: '/login' },
  ];
}
