import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';
import { generateAuthToken } from '../utils/authentication.util';

const AUTH_STORAGE_KEY = 'auth_token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isAuthenticated$ = new BehaviorSubject(Boolean(this.authKey));
  public isAuthenticated$ = this._isAuthenticated$.asObservable();

  constructor() { }

  get authKey(): string | null {
    return sessionStorage.getItem(AUTH_STORAGE_KEY);
  }

  login$(username: string, password: string) {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    const authToken = generateAuthToken();
    
    return of(authToken).pipe(
      tap(token => {
        sessionStorage.setItem(AUTH_STORAGE_KEY, token);
      }),
      tap(() => {
        this._isAuthenticated$.next(true);
      })
    )
  }

  logout$() {
    return of({}).pipe(
      tap(() => {
        sessionStorage.clear();
        this._isAuthenticated$.next(false);
      })
    )
  }

}
