import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  user = {name: "", status: "", avatar: ""};

  addUser(newUser: any){
    this.user.name = newUser.name
    this.user.status = newUser.status
    this.user.avatar = newUser.avatar
  }

  removeUser() {
    this.user = { name: '', status: '', avatar: '' };
  }
}

