import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
@Component({
  selector: 'app-base-client',
  templateUrl: './base-client.component.html',
  styleUrls: ['./base-client.component.scss']
})
export class BaseClientComponent {
  constructor(private router:Router){}
  HandleLogOut(){
    localStorage.removeItem('user')
    toastr.success('Bạn đã đăng xuất .')
    this.router.navigate(['/'])

  }
}
