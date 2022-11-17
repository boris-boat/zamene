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
  allAdds: Item[] = []
  allUsers: User[] = []
  constructor(private addsService: ItemService, private userService: UserService, private router: Router) { }
  setAdds(data: Item[]) {
    this.allAdds = data
  }
  ngOnInit(): void {
    //this.allAdds = this.addsService.getAll()
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
    this.userService.getAllUsers().subscribe(data => {

      let temp = data.map(user => user.items)
      this.setAdds(temp.flat())
    })

  }

}
