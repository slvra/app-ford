import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TableComponent } from '../../components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule, SidebarComponent, TableComponent, CommonModule],
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
    this.vehicleService.getVehicles().subscribe((data: any) => {
      this.vehicles = Array.isArray(data) ? data : data.vehicles;
    });

    this.vehicleList.get('selectedId')?.valueChanges.subscribe(id => {
      this.selectedVehicle = this.vehicles.find(v => v.id == id);
    });
  }

    get selectedIdControl(): FormControl {
    return this.vehicleList.get('selectedId') as FormControl;
  }
  
}