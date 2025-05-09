import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001';

    private readonly storageKey = 'user';

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  setUser(user: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  getUser(): any {
    const user = localStorage.getItem(this.storageKey);
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  constructor(private http: HttpClient) {}

  login(credentials: { nome: string; senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}