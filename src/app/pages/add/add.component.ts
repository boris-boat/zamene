import { UserService } from './../../services/user.service';
import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  file: any = null
  forma: FormGroup = new FormGroup({
    name: new FormControl(""),
    shortDescription: new FormControl(""),
    longDescription: new FormControl(""),
    swap: new FormControl(""),
    price: new FormControl(0),
    file: new FormControl("")
  })
  constructor(private itemService: ItemService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
  }
  fileChanged(item: any) {
    this.file = item.target.files[0]
  }
  addAdd() {
    const formData = new FormData()
    formData.append("file", this.file)
    let item: Item = new Item(this.forma.value)
    item.createdBy = this.userService.activeUser().fullname
    console.log(item)
    this.itemService.addAdd(formData, item)
    this.forma.reset()
    this.router.navigate(['/home'])
  }
}
