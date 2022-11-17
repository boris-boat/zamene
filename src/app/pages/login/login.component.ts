import { Router } from '@angular/router';

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
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])

  }
  onLogin() {
    this.userService.login(this.forma.value)
  }
}
