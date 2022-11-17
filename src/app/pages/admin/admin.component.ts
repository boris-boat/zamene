import { UserService } from './../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  forma: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    fullname: new FormControl(""),
    phoneNumber: new FormControl(""),
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  addUser() {
    this.userService.createUser(this.forma.value).subscribe({ next: (res => console.log(res)) })
  }
}
