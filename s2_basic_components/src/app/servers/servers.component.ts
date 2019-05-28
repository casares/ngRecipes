import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private serversAllowed: boolean;
  constructor() {
    this.serversAllowed = false;
    setTimeout(() => {
      this.toggleAllowStatus();
    }, 3000);
  }

  public toggleAllowStatus () {
    if (this.serversAllowed) {
      this.serversAllowed = false;
    } else {
      this.serversAllowed = true;
    }
  }
  public getAllowedStatus () {
    return this.getAllowedStatus;
  }
  ngOnInit() {
  }

}
