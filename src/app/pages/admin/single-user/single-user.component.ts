import { User } from 'src/app/models/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  @Input() user: any = new User()
  constructor() { }

  ngOnInit(): void {
  }

}
