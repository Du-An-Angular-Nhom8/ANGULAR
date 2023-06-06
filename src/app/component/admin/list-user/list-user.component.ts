import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent {
users:any=[]
constructor (private userService: UserService){
  this.userService.getAllUser().subscribe(data=>{
    this.users = data
  })
}
}
