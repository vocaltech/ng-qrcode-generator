import { Component } from '@angular/core';

import { User } from './users/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  qrData: string;
  username: string;

  private users: User[] = [
    {
      username: 'John Doe',
      login: 'vocaltech',
      password: 'mypwd'
    },
    {
      username: 'Jane Faust',
      login: 'vocality',
      password: 'mypwd'
    }
  ];

  constructor() {
    this.qrData = '';
    this.username = '';
  }

  onChangeUser = (idx: number) => {
    this.username = this.users[idx].username;
    this.qrData = JSON.stringify(this.users[idx]);
  } 

  //

}
