import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginCreds, RegisterCreds, User } from '../../types/user';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LikesService } from './likes-service';
// import { PresenceService } from './presence-service';
// import { HubConnectionState } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  private likesService = inject(LikesService);
  // private presenceService = inject(PresenceService);
  currentUser = signal<User | null>(null);
  private baseUrl = environment.apiUrl;

  register(creds: RegisterCreds) {
    return this.http.post<User>(this.baseUrl + 'account/register', creds,
      { withCredentials: true }).pipe(
        tap(user => {
          if (user) {
            this.setCurrentUser(user);
            // this.startTokenRefreshInterval();
          }
        })
      );
  }

  login(creds: LoginCreds) {
    return this.http.post<User>(this.baseUrl + 'account/login', creds,
      { withCredentials: true }).pipe(
        tap(user => {
          if (user) {
            this.setCurrentUser(user);
            // this.startTokenRefreshInterval();
          }
        })
      );
  }

  logout() {
    this.http.post(this.baseUrl + 'account/logout', {}, { withCredentials: true }).subscribe({
      next: () => {
        localStorage.removeItem('filters');
        localStorage.removeItem('user');
        this.likesService.clearLikeIds();
        this.currentUser.set(null);
        // this.presenceService.stopHubConnection();
      }
    });
  }

  refreshToken() {
    return this.http.post<User>(this.baseUrl + 'account/refresh-token', {},
      { withCredentials: true });
  }

  startTokenRefreshInterval() {
    setInterval(() => {
      this.http.post<User>(this.baseUrl + 'account/refresh-token', {},
        { withCredentials: true }).subscribe({
          next: user => {
            this.setCurrentUser(user);
          },
          error: () => {
            this.logout();
          }
        });
    }, 14 * 24 * 60 * 60 * 1000); // 14 days
  }

  setCurrentUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
    // user.roles = this.getRolesFromToken(user);
    this.likesService.getLikeIds();
    // if (this.presenceService.hubConnection?.state !== HubConnectionState.Connected) {
    //   this.presenceService.createHubConnection(user);
    // }
  }

  private getRolesFromToken(user: User): string[] {
    const payload = user.token.split('.')[1];
    const decoded = atob(payload);
    const jsonPayload = JSON.parse(decoded);
    return Array.isArray(jsonPayload.role) ? jsonPayload.role : [jsonPayload.role];
  }
}
