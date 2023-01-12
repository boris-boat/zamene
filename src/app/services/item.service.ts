import { GET_ONE_AD, DELETE_AD, EDIT_ITEM, CREATE_ITEM } from './../shared/constants';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { User } from '../models/user';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  constructor(private userService: UserService, private http: HttpClient) {

  }


  getOne(id: number) {
    return this.http.get<Item>(GET_ONE_AD + id)

  }
  addAdd(fd: FormData, item: any) {
    let formData = fd
    let user: any = this.userService.activeUser()
    if (user.username = "test") {
      alert("Test nalog nema pravo kreiranja oglasa")
      return of({})
    }
    else {

      for (let key in user) {
        formData.append(key, user[key])
      }
      let newItem: any = new Item(item)
      for (let key in newItem) {
        formData.append(key, newItem[key])
      }

      return this.http.post<Item>(CREATE_ITEM, fd)
    }
  }
  delete(id: string, user: User) {
    let data = { id, user }

    return this.http.post<User>(DELETE_AD, data)
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
    return this.http.post(EDIT_ITEM, formData)
  }
}
