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
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
    if (this.userService.activeUser().type != "admin") this.router.navigate(['/'])
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
}
