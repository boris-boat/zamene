import { ItemService } from './../../services/item.service';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownadds',
  templateUrl: './ownadds.component.html',
  styleUrls: ['./ownadds.component.scss']
})
export class OwnaddsComponent implements OnInit {
  user: User
  constructor(private userService: UserService, private itemService: ItemService) {
    this.user = this.userService.activeUser()

  }

  ngOnInit(): void {
    this.user = this.userService.activeUser()

  }

  deleteAdd(data: any) {
    this.itemService.delete(data._id, this.user).subscribe({
      next: (res: any) => {
        this.user.items = res.items
      }
    })

  }
}
