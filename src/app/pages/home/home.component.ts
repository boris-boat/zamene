import { User } from './../../models/user';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = []
  activeUser: User = new User()
  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
   // if (!this.userService.loginCheck()) this.router.navigate(['/'])
    this.userService.getAllUsers().subscribe(item => {
      this.users = item
    })

    this.activeUser = this.userService.activeUser()

  }
  isLoggedIn() {
    return this.userService.loginCheck()
  }
  createUser() {
    this.router.navigate(['/admin'])
  }
}
