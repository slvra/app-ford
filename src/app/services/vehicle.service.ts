import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veiculo } from '../Models/veiculo.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private api = 'http://localhost:3001/vehicles';
  constructor(private http: HttpClient) {}
  getVehicles(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.api);
  }
}




// @Injectable({
//   providedIn: 'root'
// })
// export class VehicleService {
//   private apiUrl = 'http://localhost:3000/vehicles';

//   constructor(private http: HttpClient) {}

//   getVehicles(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }
