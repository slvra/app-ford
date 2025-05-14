import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './vehicle-search.component.html',
  styleUrl: './vehicle-search.component.css'
})
export class VehicleSearchComponent {
  vinCode: string = '';
  vehicleData: any = null;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  onVinInputChange() {
    this.errorMessage = '';
    this.vehicleData = null;

    if (this.vinCode.length === 20) {
      this.http.post<any>('http://localhost:3001/vehicleData', { vin: this.vinCode })
        .subscribe({
          next: (data) => {
            this.vehicleData = data;
          },
          error: (error) => {
            if (error.status === 400) {
              this.errorMessage = 'Código VIN não encontrado.';
            } else {
              this.errorMessage = 'Erro ao buscar dados do veículo.';
            }
          }
        });
    }
  }
}