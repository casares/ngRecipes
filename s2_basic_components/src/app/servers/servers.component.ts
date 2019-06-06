import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private serversAllowed = false;
  private serverCreationStatus = 'Server not created';
  private serverName = 'FirstName';
  private serverCreated = false;
  private servers = [];

  constructor() {
    setTimeout(() => {
      this.serversAllowed = true;
    }, 3000);
  }

  public onServerCreation () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created';
  }

  public onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
