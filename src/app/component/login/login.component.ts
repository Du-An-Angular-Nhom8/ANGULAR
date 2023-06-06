import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: any = {
    email: '',
    password: ''
  };
  constructor(private http: HttpClient, private signupService: AuthService, private router: Router) { }
  HandleLogin(event: any) {

  }
}
