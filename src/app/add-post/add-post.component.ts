import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent {

  @Output() onUser = new EventEmitter();

  nameInputValue = '';
  statusInputValue = '';
  avatarInputValue = '';


  onName(event: any){
    this.nameInputValue = event.target.value;
  }

  onStatus(event: any){
    this.statusInputValue = event.target.value;
  }

  // onStatus(event: any) {
  //   const value = event.target.value;
  //   if (value.length > 50) {
  //     this.statusInputValue = value.substring(0, 50);
  //   } else {
  //     this.statusInputValue = value;
  //   }
  // }

  onAvatar(event: any){
    this.avatarInputValue = event.target.value;
  }

  addNewUser(nameValue: string, statusValue: string, avatarValue: string ) {
    const value = {name: nameValue, status: statusValue, avatar: avatarValue,}
    this.onUser.emit(value)
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.avatarInputValue = '';
  }
}

