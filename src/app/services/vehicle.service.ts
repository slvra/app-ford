import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3001/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
