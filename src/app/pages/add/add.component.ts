import { UserService } from './../../services/user.service';
import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import {
  DataUrl,
  DOC_ORIENTATION,
  NgxImageCompressService,
  UploadResponse,
} from 'ngx-image-compress';
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
  constructor(private itemService: ItemService, private router: Router, private userService: UserService, private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
    if (!this.userService.loginCheck()) this.router.navigate(['/'])
  }
  fileChanged(item: any, index: number) {
    this.files[index] = item.target.files[0]
  }
  async uploadAndCompress(index: number) {
    const { image, orientation, fileName } = await this.imageCompress
      .uploadFile();
    this.imageCompress
      .compressFile(image, orientation, 50, 50)
      .then((result_1: DataUrl) => {
        const split = result_1.split(',');
        const type = split[0].replace('data:', '').replace(';base64', '');
        const byteString = atob(split[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i += 1) {
          ia[i] = byteString.charCodeAt(i);
        }
        const fileBlob = new Blob([arrayBuffer], { type, });
        const file = new File([fileBlob], fileName);
        this.files[index] = file;
      });
  }
  addAdd() {
    const formData = new FormData()
    for (let i = 0; i < this.files.length; i++) {
      console.log(this.files[i])
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
