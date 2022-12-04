import { HttpClient } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  rate: number = 0
  constructor(private userService: UserService, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get("https://api.exchangerate.host/latest").subscribe((res: any) => this.rate = res.rates.RSD)

  }
  isLoggedIn() {
    return this.userService.loginCheck()
  }
  logout() {
    this.userService.logout()
  }
}
