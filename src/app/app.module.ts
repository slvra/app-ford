import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DashboardComponent
  ],
  // Removed bootstrap array as AppComponent is standalone
})
export class AppModule {

}
