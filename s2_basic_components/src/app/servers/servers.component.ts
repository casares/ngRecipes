import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private serversAllowed = false;
  private serverCreationStatus = 'Server not created';
  private serverName = '';

  constructor() {
    setTimeout(() => {
      this.serversAllowed = true;
    }, 3000);
  }

  public onServerCreation () {
    this.serverCreationStatus = 'Server Created';
  }

  public onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
