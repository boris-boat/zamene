
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forma: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }
  onLogin() {
    this.userService.login(this.forma.value)
  }
}
