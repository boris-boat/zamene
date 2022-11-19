import { Router } from '@angular/router';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = "https://podsetnik.herokuapp.com/"
  users: User[] = []
  loggedInUser: User = new User()
  isLoggedIn: boolean = false
  //umesto isloggedin  staviti user objekt
  constructor(private router: Router, private http: HttpClient) {
    this.http.get<User[]>(this.url + "zamene/getallusers").subscribe(item => this.users = item.map(data => data))
  }
  getAllUsers() {
    return this.http.get<User[]>(this.url + "zamene/getallusers")
  }
  setActiveUser(user: User) {
    this.loggedInUser = user
  }
  loginCheck() {
    return this.isLoggedIn
  }
  activeUser() {
    return this.loggedInUser
  }
  login(credentials: any) {
    let username = credentials.username
    let password = credentials.password
    let res = this.users.find(item => item.username === username)
    if (res && res.password == password) {
      this.loggedInUser = res
      this.isLoggedIn = true
      this.router.navigate(['/home'])
      return
    }
    else {
      return false
    }
  }
  logout() {
    this.isLoggedIn = false
    this.router.navigate(['/'])
  }
  createUser(data: User) {
    return this.http.post(this.url + "zamene/createuser", data)
  }
  deleteUser(data: string) {
    let id = { id: data }
    return this.http.post(this.url + "zamene/deleteUser", id, { responseType: "text" })
  }
}
