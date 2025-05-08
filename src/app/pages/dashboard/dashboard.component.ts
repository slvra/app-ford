import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardComponent } from '../../components/card/card.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, CardComponent, ReactiveFormsModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  vehicleList = new FormGroup({
    
    
  })


}