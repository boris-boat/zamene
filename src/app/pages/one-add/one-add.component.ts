import { UserService } from './../../services/user.service';
import { Item } from './../../models/item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-add',
  templateUrl: './one-add.component.html',
  styleUrls: ['./one-add.component.scss']
})
export class OneAddComponent implements OnInit {
  id: number
  activeItem: Item | null = null
  constructor(private itemService: ItemService, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params["id"]

  }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
    this.itemService.getOne(this.id).subscribe({
      next: (res) => {
        this.activeItem = new Item(res)
      }
    })
    console.log(this.activeItem)
  }

}
