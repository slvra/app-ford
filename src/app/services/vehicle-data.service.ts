import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleData } from '../Models/vehicle-data.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleDataService {
  private api = 'http://localhost:3001/vehicleData';
  constructor(private http: HttpClient) {}
  getAllData(): Observable<VehicleData[]> {
    return this.http.get<VehicleData[]>(this.api);
  }
}
