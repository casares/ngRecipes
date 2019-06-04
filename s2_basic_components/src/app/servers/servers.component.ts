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

  constructor() {
    setTimeout(() => {
      this.serversAllowed = true;
    }, 3000);
  }

  public onServerCreation () {
    this.serverCreationStatus = 'Server Created. Name is: ' + this.serverName;
  }

  public onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
