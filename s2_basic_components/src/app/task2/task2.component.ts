import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  private userName = '';
  private disabledButtonReason = '';
  constructor() { }

  public isUserNameEmpty () {
    return this.userName === '';
  }

  public resetUserName () {
    this.userName = '';
  }

  ngOnInit() {
  }

}
