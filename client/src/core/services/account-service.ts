import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  public currentUser = signal('');
  baseUrl = 'https://localhost:5001/api/';

  login(creds: any) {
    return this.http.post(this.baseUrl + 'account/login', creds);
  }
}
