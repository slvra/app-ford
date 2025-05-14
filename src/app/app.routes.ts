import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    
    {
        path: 'login',
        component: LoginComponent,
    },
    
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },

    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    }
];
