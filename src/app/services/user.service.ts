import { GET_ALL_USERS, CREATE_USER, DELETE_USER } from './../shared/constants';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []
  loggedInUser: User = new User()
  isLoggedIn: boolean = false
  constructor(private router: Router, private http: HttpClient) {
    this.getAllUsers().subscribe(item => this.users = item.map(data => data))
  }
  getAllUsers() {
    return this.http.get<User[]>(GET_ALL_USERS)
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
    let { username, password } = credentials
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
    return this.http.post(CREATE_USER, data)
  }
  deleteUser(data: string) {
    let id = { id: data }
    return this.http.post(DELETE_USER, id, { responseType: "text" })
  }
}
