import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
@Component({
  selector: 'app-base-client',
  templateUrl: './base-client.component.html',
  styleUrls: ['./base-client.component.scss']
})
export class BaseClientComponent {
  user:any={
    name:"",
    image:"",
    email:"",
    password:"",
  };
  constructor(private router:Router){}
  HandleLogOut(){
    localStorage.removeItem('user')
    toastr.success('Bạn đã đăng xuất .')
    this.router.navigate(['/'])

  }
  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    const accessToken = user ? user.accessToken : undefined;
    this.user = user ? user.user : undefined;
    // this.user = user.user;
    console.log(this.user);
    if (accessToken) {
      return true;
    }
    return false;
  }
  logout() {
    // Xử lý đăng xuất
    localStorage.removeItem('user')
   alert('Bạn đã đăng xuất.')
    this.router.navigate(['/'])
  }
}
