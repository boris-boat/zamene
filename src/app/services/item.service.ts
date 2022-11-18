import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = "https://podsetnik.herokuapp.com/"

  //  nextId: number;
  constructor(private userService: UserService, private http: HttpClient) {
    //this.nextId = Math.max(...this.items.map(item => item.id)) + 1
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
}
