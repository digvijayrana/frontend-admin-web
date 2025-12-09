import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Credentials {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loggedIn.asObservable();

  // Mock credentials for testing (set to false to use backend API)
  private useMockAuth = true;
  private mockValidCredentials = { username: 'admin', password: 'admin123' };

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuth();
  }

  login(creds: Credentials) {
    if (this.useMockAuth) {
      // Mock login: validate against hardcoded credentials
      if (
        creds.username === this.mockValidCredentials.username &&
        creds.password === this.mockValidCredentials.password
      ) {
        localStorage.setItem('mockAuthToken', 'mock-token-' + Date.now());
        this.loggedIn.next(true);
        return of({ success: true });
      }
      return throwError(() => ({ error: { message: 'Invalid credentials' } }));
    }

    // Real backend login (expects HttpOnly cookie)
    return this.http.post('/api/auth/login', creds, { withCredentials: true }).pipe(
      tap(() => this.loggedIn.next(true))
    );
  }

  logout() {
    if (this.useMockAuth) {
      // Mock logout: clear local storage
      localStorage.removeItem('mockAuthToken');
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
      return;
    }

    // Real backend logout: notify server to clear the cookie
    this.http.post('/api/auth/logout', {}, { withCredentials: true }).subscribe({
      next: () => {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      },
      error: () => {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  checkAuth() {
    if (this.useMockAuth) {
      // Mock auth check: verify token in localStorage
      const token = localStorage.getItem('mockAuthToken');
      this.loggedIn.next(!!token);
      return;
    }

    // Real backend auth check
    this.http.get('/api/auth/me', { withCredentials: true }).subscribe({
      next: () => this.loggedIn.next(true),
      error: () => this.loggedIn.next(false)
    });
  }

  isAuthenticated(): boolean {
    return this.loggedIn.value;
  }
}
