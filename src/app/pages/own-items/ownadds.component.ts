import { AddComponent } from '../add-item/add.component';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ownadds',
  templateUrl: './ownadds.component.html',
  styleUrls: ['./ownadds.component.scss']
})
export class OwnaddsComponent implements OnInit {
  user: any
  constructor(private userService: UserService, private itemService: ItemService, private router: Router, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.user = this.userService.activeUser()

    if (!this.userService.loginCheck()) this.router.navigate(['/'])

  }
  updateAdd(item: any) {
    const modalRef = this.modalService.open(AddComponent);
    modalRef.componentInstance.data = item;
    modalRef.hidden.subscribe((res) => this.ngOnInit())
  }
  deleteAdd(data: any) {
    if (confirm("Jeste li sigurni da zelite da izbrisete ovaj oglas?"))
      this.itemService.delete(data._id, this.user).subscribe({
        next: (res: any) => {
          this.user.items = res.items
        }
      })

  }

}
