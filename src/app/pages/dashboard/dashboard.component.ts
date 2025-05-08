import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardComponent } from '../../components/card/card.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '../../components/table/table.component';



@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent, CardComponent, ReactiveFormsModule, TableComponent],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // vehicleList = new FormGroup({
  
  // })
  vehicleList = new FormGroup({
    totalVendas    : new FormControl(''),
    conectados     : new FormControl(null),
    updateSoftware : new FormControl(''),
  });


}