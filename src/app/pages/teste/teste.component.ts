import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { CardComponent } from "../../components/card/card.component";

interface Vehicle {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
  img: string;
}

@Component({
  selector: 'app-teste',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CardComponent],
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  carros: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  xvar: number = 0
  yvar = 0

  servico = inject (VehicleService)
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ vehicles: Vehicle[] }>('http://localhost:3001/vehicles')
      .subscribe(response => {
        this.carros = response.vehicles;
      });
  }

  onSelectVehicle() {  
    this.servico.getVehicles().subscribe ({
      next:(response: any) => { 

        console.log(response)
        
        this.carros= response.vehicles
        this.yvar = this.xvar
      }
    })
  }


}


// import { Component } from '@angular/core';
// import { SidebarComponent } from '../../components/sidebar/sidebar.component';
// import { HttpClient } from '@angular/common/http';
// import { VehicleService } from '../../services/vehicle.service';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { Veiculo } from '../../Models/veiculo.model';
// import { VehicleData } from '../../Models/vehicle-data.model';
// import { VehicleDataService } from '../../services/vehicle-data.service';

// @Component({
//   selector: 'app-teste',
//   standalone: true,
//   imports: [SidebarComponent, CommonModule, ReactiveFormsModule],
//   // providers: [provideHttpClient()],
//   templateUrl: './teste.component.html',
//   styleUrl: './teste.component.css',
// })
// export class TesteComponent {
//   constructor(
//     private vehicleService: VehicleService,
//     private vehicleDataService: VehicleDataService
//   ) {}

//   vehicles: any[] = [];
//   allVehicles: Veiculo[] = [];
//   selectedVehicle?: Veiculo;

//   vehicleDataList: VehicleData[] = [];
//   filteredData: VehicleData[] = [];
//   vinSearchTerm: string = '';

//   ngOnInit(): void {
//     this.vehicleService.getVehicles().subscribe((data) => {
//       this.allVehicles = data;
//       this.selectedVehicle = data[0]; // mostra o primeiro por padrão
//     });

//     this.vehicleDataService.getAllData().subscribe((data) => {
//       this.vehicleDataList = data;
//       this.filteredData = []; // tabela vazia inicialmente
//     });
//   }

//   onSelectVehicle(event: Event): void {
//     const modelo = (event.target as HTMLSelectElement).value;
//     const v = this.allVehicles.find((veiculo) => veiculo.vehicle === modelo);
//     if (v) this.selectedVehicle = v;
//   }

//   onVINSearch(event: Event): void {
//     const term = (event.target as HTMLInputElement).value.trim();
//     this.vinSearchTerm = term;
//     if (!term) {
//       this.filteredData = [];
//       return;
//     }
//     this.filteredData = this.vehicleDataList.filter((d) =>
//       d.vehicledata_vin.toLowerCase().includes(term.toLowerCase())
//     );
//   }
// }
