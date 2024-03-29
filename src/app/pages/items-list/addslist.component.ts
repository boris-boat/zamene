import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addslist',
  templateUrl: './addslist.component.html',
  styleUrls: ['./addslist.component.scss']
})
export class AddslistComponent implements OnInit {
  user: User

  allAdds: Item[] = []
  allUsers: User[] = []
  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.activeUser()

  }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
    this.userService.getAllUsers().subscribe(data => {
      this.allUsers = data

    })

  }

}
