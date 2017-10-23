import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: {email: string, password: string}) {
    return this.http.post(`${environment.api_url}/auth/login`, credentials);
  }

}
