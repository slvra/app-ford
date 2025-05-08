import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly validUser = {
    username: 'admin',
    password: '123456'
  };

  login(username: string, password: string): boolean {
    return username === this.validUser.username && password === this.validUser.password;
  }
}
