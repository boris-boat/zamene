import { User } from './../../models/user';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';
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
  constructor(private itemService: ItemService, private userService: UserService, private router: Router) {
    this.user = this.userService.activeUser()

  }
  setAdds(data: Item[]) {
    this.allAdds = data
  }
  ngOnInit(): void {
    //this.allAdds = this.addsService.getAll()
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
    this.userService.getAllUsers().subscribe(data => {

      let temp = data.map(user => user.items)
      console.log(temp)
      this.setAdds(temp.flat())
    })

  }
  // deleteAdd(data: any) {
  //   this.itemService.delete(data._id, this.user).subscribe({
  //     next: (res: any) => {
  //       console.log(res)
  //     }
  //   })

  // }
}
