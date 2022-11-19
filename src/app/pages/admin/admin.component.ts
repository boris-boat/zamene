import { Item } from './../../models/item';
import { User } from './../../models/user';
import { ItemService } from './../../services/item.service';
import { Router } from '@angular/router';
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
  constructor(private userService: UserService, private router: Router, private itemService: ItemService) { }
  allUsers: User[] = []
  allItems: Item[] = []
  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
    if (this.userService.activeUser().type != "admin") this.router.navigate(['/'])
    this.getData()
  }

  addUser() {
    this.userService.createUser(this.forma.value).subscribe({
      next: ((res) => {
        if (res) {
          alert("Korisnik dodat")
          this.forma.reset()
        }
      })
    })
  }
  populateData() {
    for (let user of this.allUsers) {
      console.log(user)
      for (let item of user.items) {
        console.log(item)
        this.allItems.push(item)
      }
    }
  }
  getData() {
    this.userService.getAllUsers().subscribe(res => {
      this.allUsers = res
      this.populateData()
    })

  }
}
