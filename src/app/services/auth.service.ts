import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  Signup(user:any) {
    return this.http.post(`http://localhost:8080/api/signup`,user)
  }
}
