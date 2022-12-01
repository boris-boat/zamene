import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { User } from '../models/user';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = "https://podsetnik.herokuapp.com/"


  constructor(private userService: UserService, private http: HttpClient) {

  }


  getOne(id: number) {
    return this.http.get(this.url + "zamene/getone/" + id)

  }
  addAdd(fd: FormData, item: any) {
    let formData = fd
    let user: any = this.userService.activeUser()
    for (let key in user) {
      formData.append(key, user[key])
    }
    let newItem: any = new Item(item)
    for (let key in newItem) {
      formData.append(key, newItem[key])
    }

    return this.http.post(this.url + "zamene/createitem", fd)
  }
  delete(id: any, user: User) {
    let data = { id: id, user: user }

    return this.http.post(this.url + "zamene/deleteAdd", data)
  }
  updateAdd(formData: FormData, item: any, oldItem: any) {

    let user: any = this.userService.activeUser()
    for (let key in user) {
      formData.append(key, user[key])
    }
    let newItem: any = new Item(item)
    for (let key in newItem) {
      formData.append(key, newItem[key])
    }
    formData.append("oldItemId", oldItem._id)
    return this.http.post(this.url + "zamene/editItem", formData)
  }
}
