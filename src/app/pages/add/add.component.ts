import { UserService } from './../../services/user.service';
import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  files: any = []
  forma: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    shortDescription: new FormControl(""),
    longDescription: new FormControl("", Validators.required),
    swap: new FormControl(""),
    gift: new FormControl(""),
    price: new FormControl(0, Validators.required),
    file: new FormControl(""),
    file2: new FormControl(""),
    file3: new FormControl("")

  })
  constructor(private itemService: ItemService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
  }
  fileChanged(item: any, index: number) {
    this.files[index] = item.target.files[0]
  }
  addAdd() {
    const formData = new FormData()
    for (let i = 0; i < this.files.length; i++) {
      formData.append("files", this.files[i])
    }
    let item: Item = new Item(this.forma.value)
    item.createdBy = this.userService.activeUser().fullname
    item.creatorPhoneNumber = this.userService.activeUser().phoneNumber
    this.itemService.addAdd(formData, item).subscribe(res => {
      if (res) alert("Oglas uspesno dodat")
      this.userService.setActiveUser(new User(res))

      this.forma.reset()
      this.router.navigate(['/home'])
    })
  }
}
