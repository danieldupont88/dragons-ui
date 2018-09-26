import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authToken: string;
  isAuthenticated: boolean;

  authenticate(username: string, password: string): Observable<string> {
    if (username === 'user' && password === 'pass') {
      return of(this.authToken);
    } else {
      throw new Error('Authentication Error');
    }
  }

  constructor() {
    this.authToken = 'validToken';
    this.isAuthenticated = false;
  }
}
