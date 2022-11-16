import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
  name: string = 'guest';
  isDisabled = true;

  constructor() {}

  ngOnInit(): void {}

  onUppdateUserName() {
    if(this.name != '' && this.name != 'guest') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  clearName() {
    this.name = '';
  }
  
}
