import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
  }
  isLoggedIn() {
    return this.userService.loginCheck()
  }
  logout() {
    this.userService.logout()
  }
}
