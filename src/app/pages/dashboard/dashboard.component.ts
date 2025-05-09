import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule, SidebarComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vehicles: any[] = [];
  selectedVehicle: any = null;

  vehicleList = new FormGroup({
    selectedId: new FormControl('')
  });

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data.vehicles;
    });

    this.vehicleList.get('selectedId')?.valueChanges.subscribe(id => {
      this.selectedVehicle = this.vehicles.find(v => v.id == id);
    });
  }
}


// import { Component } from '@angular/core';
// import { SidebarComponent } from '../../components/sidebar/sidebar.component';
// import { CardComponent } from '../../components/card/card.component';
// import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { TableComponent } from '../../components/table/table.component';



// @Component({
//   selector: 'app-dashboard',
//   imports: [SidebarComponent, CardComponent, ReactiveFormsModule, TableComponent],
//   standalone: true,
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {


//   vehicleList = new FormGroup({
//     totalVendas    : new FormControl(''),
//     conectados     : new FormControl(null),
//     updateSoftware : new FormControl(''),
//   });


// }