import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Veiculo } from '../../Models/veiculo.model';
import { VehicleData } from '../../Models/vehicle-data.model';
import { VehicleDataService } from '../../services/vehicle-data.service';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [SidebarComponent, CommonModule, ReactiveFormsModule],
  // providers: [provideHttpClient()],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css',
})
export class TesteComponent {
  constructor(
    private vehicleService: VehicleService,
    private vehicleDataService: VehicleDataService
  ) {}

  vehicles: any[] = [];
  allVehicles: Veiculo[] = [];
  selectedVehicle?: Veiculo;

  vehicleDataList: VehicleData[] = [];
  filteredData: VehicleData[] = [];
  vinSearchTerm: string = '';

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((data) => {
      this.allVehicles = data;
      this.selectedVehicle = data[0]; // mostra o primeiro por padrão
    });

    this.vehicleDataService.getAllData().subscribe((data) => {
      this.vehicleDataList = data;
      this.filteredData = []; // tabela vazia inicialmente
    });
  }

  onSelectVehicle(event: Event): void {
    const modelo = (event.target as HTMLSelectElement).value;
    const v = this.allVehicles.find((veiculo) => veiculo.vehicle === modelo);
    if (v) this.selectedVehicle = v;
  }

  onVINSearch(event: Event): void {
    const term = (event.target as HTMLInputElement).value.trim();
    this.vinSearchTerm = term;
    if (!term) {
      this.filteredData = [];
      return;
    }
    this.filteredData = this.vehicleDataList.filter((d) =>
      d.vehicledata_vin.toLowerCase().includes(term.toLowerCase())
    );
  }
}
